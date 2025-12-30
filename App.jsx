
import { useEffect, useState } from "react";
import { getProducts, createCheckoutSession } from "./api";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51SjympDqRz3Qo8jLrCKM05BhseWrTvFzP8MdY1rwEPcK1a1jtCMtC3gbBP4M56aVKvwZl2HyMpXj9S9HRCwJNllO000vtqOHww"
);

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Handle Stripe checkout
  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Cart is empty");

    try {
      // Prepare order data for backend
      const orderData = {
        items: cart.map(item => ({ productId: item.id, quantity: 1 })),
      };

      // Call backend to create Stripe checkout session
      const session = await createCheckoutSession(orderData);

      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.data.id });
    } catch (err) {
      console.error(err);
      alert("Error during checkout.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <strong>{product.name}</strong> - ${product.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item.name} - ${item.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Total: ${totalPrice}</strong>
      </p>
      <button onClick={handleCheckout} style={{ padding: "10px 20px" }}>
        Checkout
      </button>
    </div>
  );
}

export default App;
