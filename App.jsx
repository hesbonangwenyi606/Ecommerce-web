import { useEffect, useState } from "react";
import { getProducts, createOrder } from "./api";

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
    if (cart.length === 0) return alert("Cart is empty");
    try {
      const orderData = { items: cart.map(item => ({ productId: item.id, quantity: 1 })) };
      await createOrder(orderData);
      alert("Order created successfully!");
      setCart([]);
    } catch (err) {
      console.error(err);
      alert("Error creating order.");
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default App;

