// Import React tools needed for Context, state, and side effects.
// createContext creates the shared context object.
// useContext lets components read values from the context.
// useEffect runs code when state changes.
// useState stores the watchlist state.
import { createContext, useContext, useEffect, useState } from "react";

// Create a new Context object for the watchlist.
// This will hold the shared watchlist data and helper functions.
const WatchlistContext = createContext();

// Create a provider component that wraps the app
// and gives child components access to the watchlist context.
export function WatchlistProvider({ children }) {

    // Create state for the watchlist.
    // This uses a callback function so localStorage is checked only once
    // when the component first loads.
    const [watchlist, setWatchlist] = useState(() => {

        // Get any previously saved watchlist data from localStorage.
        // localStorage stores data as strings.
        const savedWatchlist = localStorage.getItem("watchlist");

        // Log the saved value to confirm whether data already exists in the browser.
        console.log("Saved watchlist from localStorage:", savedWatchlist);

        // If saved data exists, convert it from a JSON string into a JavaScript array.
        // If no saved data exists, start with an empty array.
        return savedWatchlist ? JSON.parse(savedWatchlist) : [];
    });

    // useEffect runs every time the watchlist state changes.
    // This keeps localStorage updated with the latest watchlist.
    useEffect(() => {

        // Log the current watchlist so we can confirm what is being saved.
        console.log("Saving watchlist to localStorage:", watchlist);

        // Convert the watchlist array into a JSON string
        // and save it in localStorage under the key "watchlist".
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    // Function to add a movie to the watchlist.
    function addToWatchlist(movie) {

        // Log the movie being added to confirm the correct movie object was passed in.
        console.log("Adding movie to watchlist:", movie);

        // Check if the movie is already saved in the watchlist.
        // some() returns true if at least one movie has the same id.
        const alreadySaved = watchlist.some((item) => item.id === movie.id);

        // If the movie is already saved, stop here to prevent duplicates.
        if (alreadySaved) {
            console.log("Movie already in watchlist:", movie.title);
            return;
        }

        // Add the new movie to the existing watchlist array.
        // Spread syntax copies the old array and appends the new movie.
        setWatchlist([...watchlist, movie]);
    }

    // Function to remove a movie from the watchlist using its id.
    function removeFromWatchlist(movieId) {

        // Log the id being removed so we can confirm the correct movie is targeted.
        console.log("Removing movie from watchlist. ID:", movieId);

        // Create a new array that excludes the movie with the matching id.
        const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);

        // Update the watchlist state with the new filtered array.
        setWatchlist(updatedWatchlist);
    }

    // Return the Provider component.
    // The value prop shares the watchlist data and helper functions
    // with all child components wrapped inside this provider.
    return (
        <WatchlistContext.Provider
            value={{ watchlist, addToWatchlist, removeFromWatchlist }}
        >
            {children}
        </WatchlistContext.Provider>
    );
}

// Create a custom hook for easier access to the watchlist context.
// This lets other components call useWatchlist() instead of writing
// useContext(WatchlistContext) every time.
export function useWatchlist() {
    return useContext(WatchlistContext);
}
