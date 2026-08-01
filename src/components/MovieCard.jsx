import "./../styles/MovieCard.css"
import { useWatchlist } from "../context/WatchlistContext";


export default function MovieCard({ movie }) {

  // console.log("MovieCard recieved movie:", movie);
  const { addToWatchlist } = useWatchlist();

  // create image url for movie poster
  // If movie.poster_path exists, build a full TMDB image URL using
  const imageUrl = movie.poster_path

    // If poster_path does not exist, use a placeholder image instead
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  // console.log("MovieCard imageUrl:", imageUrl);


  return (
    <div className="movie-card">
      {imageUrl ? (
        <img className="movie-poster" src={imageUrl} alt={movie.title} />
      ) : (
        <div className="no-image">No Image Available</div>
      )}

      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-rating">Rating: {movie.vote_average}</p>
      <p className="movie-release-date">Release Date: {movie.release_date}</p>

      <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
    </div>
  );
}