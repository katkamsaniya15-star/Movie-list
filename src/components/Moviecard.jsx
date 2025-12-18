import "../css/Moviecard.css";
import { useFavorites } from "../context/FavoritesContext";

function MovieCard({ movie }) {
  const { addToFavorites } = useFavorites();

  function onFavClick() {
    addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavClick}>
            ♡
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
