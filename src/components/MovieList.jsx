


export default function MovieList({ movies = [] }) {
  return (
    
    <section>
<h2>Trending Movies</h2>
{movies.map((movie) => (
    <p key={movie.id}>{movie.title}</p>
))}
    </section>



  );
  
}