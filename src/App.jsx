import { useEffect, useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'
import Watchlist from './components/Watchlist'
import { getTrendingMovies } from './services/tmdb'


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

  return (

    <div className='app'>
      <Header />
      <SearchBar />
      <GenreFilter />
      <MovieList />
      <Watchlist />


    </div>
  )
}