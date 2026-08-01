import { useState } from "react";
import "../styles/Watchlist.css";
import { useWatchlist } from "../context/WatchlistContext";

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [showWatchlist, setShowWatchlist] = useState(false);

  console.log("Current watchlist:", watchlist);

  return (
    <section className="watchlist-section">
      <div className="watchlist-header">
        <button
          className="watchlist-toggle"
          onClick={() => setShowWatchlist(!showWatchlist)}
        >
          {showWatchlist ? "Hide Watchlist" : `View Watchlist (${watchlist.length})`}
        </button>
      </div>

      {showWatchlist && (
        <>
          <h2 className="watchlist-title">My Watchlist</h2>

          {watchlist.length === 0 ? (
            <p className="watchlist-empty">No movies saved yet.</p>
          ) : (
            <div className="watchlist-list">
              {watchlist.map((movie) => (
                <div key={movie.id} className="watchlist-item">
                  <p className="watchlist-movie-title">{movie.title}</p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromWatchlist(movie.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
