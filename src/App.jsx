import './styles/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'
import Watchlist from './components/Watchlist'


export default function App() {

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