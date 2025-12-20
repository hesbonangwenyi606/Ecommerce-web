import { useEffect, useState } from "react";
import api from "../api/api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    api.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>Not authorized. Please log in.</p>;

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
