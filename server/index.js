import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:8080" // your frontend port
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend connected 🚀" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
