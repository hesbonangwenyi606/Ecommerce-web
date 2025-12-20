import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "Backend connected " }));

// Auth routes
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

