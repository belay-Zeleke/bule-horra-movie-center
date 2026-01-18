const express = require("express");
const router = express.Router();
const tmdb = require("../services/tmdb");

// Categories (genres)
router.get("/categories", async (req, res) => {
  const response = await tmdb.get("/genre/movie/list");
  res.json(response.data.genres);
});

// Movies by category
router.get("/category/:id", async (req, res) => {
  const response = await tmdb.get("/discover/movie", {
    params: { with_genres: req.params.id }
  });
  res.json(response.data.results);
});

// Trailer
router.get("/trailer/:movieId", async (req, res) => {
  const response = await tmdb.get(`/movie/${req.params.movieId}/videos`);
  const trailer = response.data.results.find(v => v.type === "Trailer");
  res.json(trailer);
});

module.exports = router;
 