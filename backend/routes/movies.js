
const express = require("express");
const router = express.Router();
const tmdb = require("../services/tmdb");

// Popular movies
router.get("/", async (req, res) => {
  try {
    const response = await tmdb.get("/movie/popular");
    res.json(response.data.results);
  } catch (error) {
    console.error("Popular movies error:", error.message);
    res.status(500).json({ message: "Failed to fetch popular movies" });
  }
});

// Categories (genres)
router.get("/categories", async (req, res) => {
  try {
    const response = await tmdb.get("/genre/movie/list");
    res.json(response.data.genres);
  } catch (error) {
    console.error("Categories error:", error.message);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

// Movies by category
router.get("/category/:id", async (req, res) => {
  try {
    const response = await tmdb.get("/discover/movie", {
      params: { with_genres: req.params.id }
    });
    res.json(response.data.results);
  } catch (error) {
    console.error("Category error:", error.message);
    res.status(500).json({ message: "Failed to fetch category movies" });
  }
});

// Movie trailer
router.get("/trailer/:movieId", async (req, res) => {
  try {
    const response = await tmdb.get(`/movie/${req.params.movieId}/videos`);
    const trailer = response.data.results.find(
      v => v.type === "Trailer" && v.site === "YouTube"
    );

    res.json(trailer || null);
  } catch (error) {
    console.error("Trailer error:", error.message);
    res.status(500).json({ message: "Failed to fetch trailer" });
  }
});

module.exports = router;
