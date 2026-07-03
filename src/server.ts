import app from "./app";

// Kalau di Render pakai port Render, kalau di laptop pakai 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Shinigami API Server Started`);
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log("=================================");
});