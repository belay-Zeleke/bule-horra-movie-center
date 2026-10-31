
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("./routes/movies");

const app = express();

app.use(cors());
app.use(express.json());

// Homepage route
app.get("/", (req, res) => {
  res.json({
    message: "Bule Horra Movie Center API is running!"
  });
});

// Movie API routes
app.use("/api/movies", movieRoutes);

console.log(
  "TMDB TOKEN LOADED:",
  process.env.TMDB_TOKEN ? "YES" : "NO"
);

// Start server locally
if (require.main === module) {
  const PORT = process.env.PORT || 5050;

  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
}

module.exports = app;
