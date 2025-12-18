import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/Moviecard";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet </p>;
  }

  return (
    <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default Favorites;
