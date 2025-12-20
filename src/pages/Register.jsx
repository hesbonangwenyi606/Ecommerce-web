import { useState } from "react";
import api from "../api/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    try {
      const res = await api.post("/auth/register", { email, password });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response.data.message || "Error");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>{msg}</p>
    </div>
  );
}
