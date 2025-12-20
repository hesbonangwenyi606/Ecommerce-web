import { useEffect, useState } from "react";
import api from "../api/api";

export default function TestBackend() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    api.get("/health")
      .then(res => setMsg(res.data.status))
      .catch(() => setMsg("Backend NOT connected"));
  }, []);

  return <h1>{msg}</h1>;
}
