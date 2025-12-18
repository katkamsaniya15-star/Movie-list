import MovieCard from "../components/Moviecard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch {
      setError("Movie not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}

export default Home;
