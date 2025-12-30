import { useEffect, useState } from "react";
import { getProducts, createCheckoutSession } from "./api";
import { loadStripe } from "@stripe/stripe-js";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const stripePromise = loadStripe("pk_test_51SjympDqRz3Qo8jLrCKM05BhseWrTvFzP8MdY1rwEPcK1a1jtCMtC3gbBP4M56aVKvwZl2HyMpXj9S9HRCwJNllO000vtqOHww");

function App() {
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
      <header>
        <h1>LuxeStore</h1>
        <p>Discover luxury products crafted with excellence</p>
      </header>

      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} handleCheckout={handleCheckout} />

      <footer>
        <p>📍 Nairobi, Kenya | 📧 info@luxury.com | 📞 +254 743 573 380</p>
        <p>© 2025 LuxeStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
