
import MovieCard from "./MovieCard";
import "./../styles/MovieList.css"

export default function MovieList({ movies = [] }) {

  console.log("MovieList received movies:", movies);
  console.log("MovieList movies length:", movies.length);






  return (

    <section className="movie-list-section">

      <h2
      className="movie-list-title">Trending Movies</h2>

      <div className="movie-list">
      {movies.map((movie) => (

        // console.log("Mapping movies:", movie);
        // console.log("Movie ID:", movie.id);
        // console.log("Mapping title:", movie.title);


        <MovieCard key={movie.id}
          movie={movie} />
      ))}
      </div>
    </section>
  );

}