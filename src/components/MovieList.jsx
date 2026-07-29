
import MovieCard from "./MovieCard";

export default function MovieList({ movies = [] }) {

  console.log("MovieList received movies:", movies);
  console.log("MovieList movies length:", movies.length);






  return (

    <section>
      <h2>Trending Movies</h2>
      {movies.map((movie) => {
        console.log("Mapping movies:", movie);
        console.log("Movie ID:", movie.id);
        console.log("Mapping title:", movie.title);


        return <MovieCard key={movie.id}
          movie={movie} />;
      })}
    </section>



  );

}