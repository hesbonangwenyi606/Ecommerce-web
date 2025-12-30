import { useState, useEffect } from "react";
import { getProducts, createCheckoutSession } from "./api";
import { loadStripe } from "@stripe/stripe-js";

// Stripe
const stripePromise = loadStripe(
  "pk_test_51SjympDqRz3Qo8jLrCKM05BhseWrTvFzP8MdY1rwEPcK1a1jtCMtC3gbBP4M56aVKvwZl2HyMpXj9S9HRCwJNllO000vtqOHww"
);

export default function Home({ user }) {
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
        items: cart.map(item => ({ productId: item.id, quantity: 1, name: item.name, price: item.price }))
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
