import { useEffect, useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'
import Watchlist from './components/Watchlist'
import { getTrendingMovies, searchMovies, getGenres } from './services/tmdb'


export default function App() {

  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  

  useEffect(() => {
    async function loadData() {
      const movieData = await getTrendingMovies();
      setMovies(movieData);
      setAllMovies(movieData);

      const genreData = await getGenres();
      setGenres(genreData);
    }

    loadData();
  }, []);


  async function handleSearch(query) {

    // Log the search query received from SearchBar.
    console.log("handleSearch query:", query)

    // The returned value should be an array of movie objects.
    const searchResults = await searchMovies(query)

    // Log the array of movies returned from the API search.
    console.log("searchResults:", searchResults)

    // Update the movies state with the new search results.
    setMovies(searchResults);
    setAllMovies(searchResults);
    setSelectedGenre("");

  }

  // This function runs when the user selects a genre from the dropdown.
  function handleGenreChange(genreId) {

    // Log the selected genre id so we can confirm which value
    console.log("handleGenreChange genreId:", genreId);

    // Update the selectedGenre state so the dropdown stays in sync
    setSelectedGenre(genreId);

    // If no genre is selected, meaning the user chose "All Genres",
    // show all movies again and stop the function
    if (!genreId) {
      setMovies(allMovies);
      return;
    }

    // Filter the full movie list to only include movies
    // genre_ids array contains the selected genre id
    // Number(genreId) converts the dropdown value from a string to a number
    const filteredMovies = allMovies.filter((movie) =>
      movie.genre_ids.includes(Number(genreId))
    );

    // Log the filtered movies array to confirm the filtering worked
    console.log("Filtered movies:", filteredMovies);

    // Update the movies state with only the filtered results
    // so the UI re-renders and shows matching movies
    setMovies(filteredMovies);
  }


  return (
    // Main container for the entire app
    <div className='app'>
      <Header />
      {/* SearchBar receives the handleSearch function as a prop.
        SearchBar will call this function and pass the typed movie title back up to App.jsx. */}
      <SearchBar onSearch={handleSearch} />

      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />
      <Watchlist />
      {/* Displays the current list of movies stored in state. */}
      <MovieList movies={movies} />

    </div>
  )
}