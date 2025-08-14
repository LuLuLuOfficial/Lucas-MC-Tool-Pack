import express from "express";

const PORT = 8080;

const app = express();

app.use(express.static("."));

app.use((req, res) => {
  res.status(404).send("404 - File not found");
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`✅ Server running at http://127.0.0.1:${PORT}`);
});