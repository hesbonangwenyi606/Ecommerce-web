import React, { useState } from "react";
import { loginUser } from "./api";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      setUser(res.data); // Save logged-in user in App state
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Invalid email or password.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br /><br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
