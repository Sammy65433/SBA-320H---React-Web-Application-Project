import { useEffect, useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'
import Watchlist from './components/Watchlist'
import { getTrendingMovies, searchMovies } from './services/tmdb'


export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function loadMovies() {
      const movieData = await
      getTrendingMovies();
      setMovies(movieData)
      
    }
    loadMovies();
  }, []);

async function handleSearch(query) {
  
  // Log the search query received from SearchBar.
  console.log("handleSearch query:", query)

  // The returned value should be an array of movie objects.
  const searchResults = await searchMovies(query)

  // Log the array of movies returned from the API search.
  console.log("searchResults:", searchResults)

  // Update the movies state with the new search results.
  setMovies(searchResults)
}

return (
  // Main container for the entire app
  <div className='app'>
    <Header />
    {/* SearchBar receives the handleSearch function as a prop.
        SearchBar will call this function and pass the typed movie title back up to App.jsx. */}
    <SearchBar onSearch={handleSearch} />
    <GenreFilter />
    {/* Displays the current list of movies stored in state. */}
    <MovieList movies={movies} />
    <Watchlist />
  </div>
)
}