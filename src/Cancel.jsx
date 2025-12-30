import React from "react";

function Cancel() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Payment Cancelled</h1>
      <p>Your payment was not completed. You can try again.</p>
      <a href="/">Go back to products</a>
    </div>
  );
}

export default Cancel;
