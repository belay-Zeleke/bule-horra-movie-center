
import { useEffect, useState } from "react";
import { api } from "../api";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import TrailerModal from "../components/TrailerModal";
import Footer from "../components/Footer";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    api.get("/movies/categories")
      .then(res => {
        setCategories(res.data);
        setActiveCategory(res.data[0]);
      })
      .catch(err => console.error("Categories API Error:", err));
  }, []);

  // Fetch movies whenever active category changes
  useEffect(() => {
    if (!activeCategory) return;
    setLoading(true);
    api.get(`/movies/category/${activeCategory.id}`)
      .then(res => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Movies API Error:", err);
        setLoading(false);
      });
  }, [activeCategory]);

  // Open trailer modal
  const openTrailer = async (movieId) => {
    try {
      const res = await api.get(`/movies/trailer/${movieId}`);
      setTrailer(res.data);
    } catch (err) {
      console.error("Trailer API Error:", err);
    }
  };

  return (
    <div style={{ background: "#f0f4ff", minHeight: "100vh", padding: "20px" }}>
      <Header />

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        active={activeCategory?.id}
        onSelect={setActiveCategory}
      />

      {/* Loading */}
      {loading && <p style={{ textAlign: "center", marginTop: 20 }}>Loading movies...</p>}

      {/* Movies Grid */}
      <div
        className="grid"
        id="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {movies?.map(movie => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => openTrailer(movie.id)}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ color: "#0a2540", margin: "10px 0 4px", fontSize: "16px" }}>
              {movie.title}
            </h3>
            <span style={{ color: "#1e90ff", fontSize: "13px" }}>Watch Trailer</span>
          </div>
        ))}
      </div>

      {/* Trailer Modal */}
      <TrailerModal trailer={trailer} onClose={() => setTrailer(null)} />
      
      <Footer/>
    </div>
  );
}
