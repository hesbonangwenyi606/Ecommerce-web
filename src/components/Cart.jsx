import React from "react";

function Cart({ cart, removeFromCart, totalPrice, handleCheckout }) {
  return (
    <div className="cart">
      <h2>Shopping Cart ({cart.length})</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} 
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ${totalPrice}</strong></p>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
