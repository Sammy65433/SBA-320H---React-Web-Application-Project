import "../styles/GenreFilter.css";

export default function GenreFilter({ genres = [], selectedGenre, onGenreChange }) {
  console.log("GenreFilter props:", genres, selectedGenre);

  return (
    <section className="genre-filter">
      <label htmlFor="genre-select">Filter by Genre: </label>

      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(event) => {
          console.log("Selected genre id:", event.target.value);
          onGenreChange(event.target.value);
        }}
      >
        <option value="">All Genres</option>

        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      

    </section>
  );
}
