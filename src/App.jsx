import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getProducts, createCheckoutSession, getCurrentUser } from "./api";
import { loadStripe } from "@stripe/stripe-js";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Success from "./Success";
import Cancel from "./Cancel";
import Signup from "./Signup";
import Login from "./Login";

const stripePromise = loadStripe(
  "pk_test_51SjympDqRz3Qo8jLrCKM05BhseWrTvFzP8MdY1rwEPcK1a1jtCMtC3gbBP4M56aVKvwZl2HyMpXj9S9HRCwJNllO000vtqOHww"
);

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
    if (!user) return alert("Please login to checkout!");
    if (!cart.length) return alert("Cart is empty");

    try {
      const orderData = { items: cart.map(item => ({ productId: item.id, quantity: 1 })) };
      const session = await createCheckoutSession(orderData);
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.data.id });
    } catch (err) {
      console.error(err);
      alert("Error during checkout");
    }
  };

  return (
    <div>
      <header style={{ padding: "20px" }}>
        <h1>LuxeStore</h1>
        {user ? (
          <p>Welcome, {user.name}</p>
        ) : (
          <p>
            Discover luxury products crafted with excellence | 
            <Link to="/login"> Login</Link> | <Link to="/signup"> Signup</Link>
          </p>
        )}
      </header>

      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} handleCheckout={handleCheckout} />

      <footer style={{ padding: "20px", marginTop: "20px", borderTop: "1px solid #ccc" }}>
        <p>📍 Nairobi, Kenya | 📧 info@luxury.com | 📞 +254 743 573 380</p>
        <p>© 2025 LuxeStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  // Fetch current logged-in user
  useEffect(() => {
    getCurrentUser()
      .then(res => setUser(res.data))
      .catch(err => console.log("No user logged in"));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
