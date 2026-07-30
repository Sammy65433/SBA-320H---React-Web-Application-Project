import "./../styles/MovieCard.css"


export default function MovieCard({ movie }) {

  console.log("MovieCard recieved movie:", movie);

  // create image url for movie poster
  // If movie.poster_path exists, build a full TMDB image URL using
  const imageUrl = movie.poster_path

    // If poster_path does not exist, use a placeholder image instead
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "null";

  console.log("MovieCard imageUrl:", imageUrl);


  return (
    <>
      {/* Main Container for one movie card - Use later for CSS  */}
      <div className="movie-card">

        {/* Display movie poster img - src for imageUrl - alt for movie title for access and screen  */}
        
        <img className="movie-poster" src={imageUrl} alt={movie.title} />

        {/* Display movie title heading elements */}
        <h3 className="movie-title">{movie.title}</h3>

        {/* Display movie rating from TMDB */}

        <p className="movie-rating">Rating: {movie.vote_average}</p>

        {/* Display movie release date  */}
        <p className="movie-release-date">Release Date: {movie.release_date}</p>

      </div>;

    </>
  );
}