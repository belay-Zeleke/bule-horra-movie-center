const express = require("express");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("./routes/movies");

const app = express();
app.use(cors());

app.use("/api/movies", movieRoutes);

console.log("TMDB TOKEN LOADED:", process.env.TMDB_TOKEN ? "YES" : "NO");

app.listen(5050, () => {
  console.log("Horra Movie Center API running on port 5000");
});
