import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { getProducts, createCheckoutSession, registerUser, loginUser, getCurrentUser } from "./api";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./Success";
import Cancel from "./Cancel";

// Stripe
const stripePromise = loadStripe(
  "pk_test_51SjympDqRz3Qo8jLrCKM05BhseWrTvFzP8MdY1rwEPcK1a1jtCMtC3gbBP4M56aVKvwZl2HyMpXj9S9HRCwJNllO000vtqOHww"
);

// Home Component (Protected)
function Home({ user }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    if (!cart.length) return alert("Cart is empty");

    try {
      const orderData = {
        items: cart.map(item => ({ productId: item.id, quantity: 1, price: item.price, name: item.name }))
      };
      const session = await createCheckoutSession(orderData);
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.data.id });
    } catch (err) {
      console.error(err);
      alert("Error during checkout");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <h1>LuxeStore</h1>
        <p>Welcome, {user.email} | <button onClick={handleLogout}>Logout</button></p>
      </header>

      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <strong>{p.name}</strong> - ${p.price}
            <button style={{ marginLeft: "10px" }} onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>
            {item.name} - ${item.price}
            <button style={{ marginLeft: "10px" }} onClick={() => removeFromCart(idx)}>Remove</button>
          </li>
        ))}
      </ul>

      <p><strong>Total: ${totalPrice}</strong></p>
      <button onClick={handleCheckout} style={{ padding: "10px 20px" }}>Checkout</button>
    </div>
  );
}

// Login Component
function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("/"); // go to Home
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <br /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
}

// Signup Component
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <br /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <br /><br />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

// Main App
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUser()
        .then(res => setUser(res.data))
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
