// Get API key from .env file
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// TMDB base URL
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch trending movies for the week
export async function getTrendingMovies() {
    try {
        // console.log("API KEY:", API_KEY)
        console.log("Fetching trenfing movies....")

        // Send GET request to TMDB trending movies endpoint
        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );

        console.log("Response:", response);
        // Check if request failed
        if (!response.ok) {
            throw new Error("Failed to fetch movies.");
        }

        // Convert response to JSON
        const data = await response.json();
        console.log("TMDB data:", data)

        // Return array of movie objects
        return data.results;
    } catch (error) {
        console.error(error);

        // Return empty array so app does not crash
        return [];
    }
}

// Search movies by title
export async function searchMovies(query) {
    try {
        // Log the user's search text to confirm the function received it correctly
        console.log("Search query:", query)

        // Send a GET request to TMDB's movie search endpoint
        // encodeURIComponent(query) makes the search text safe for use in a URL
        // This is important if the user types spaces or special characters
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );


        console.log("Search response:", response);
        // Check if request failed
        if (!response.ok) {
            throw new Error("Failed to fetch movies.");
        }

        // Convert response to JSON
        const data = await response.json();

        // Log the full JSON object returned from TMDB
        console.log("Search data from TMDB:", data);

        // Log just the results array
        // helps confirm the movie list is in the correct property
        console.log("Search movie results:", data.results);

        // Return array of movie objects
        return data.results;
    } catch (error) {
        // Log any error that happens during the search request
        // helps with debugging if the fetch fails or the endpoint is wrong
        console.error("Search movies error:", error);

        // Return empty array so app does not crash
        return [];
    }
}

// Fetch all movie genres from TMDB
export async function getGenres() {
    try {
        // Log message so we know this function has started running 
        console.log("Fetching genres...");

        // Send a GET Request
        // genre/movie/list is the endpoint - returns all movies  
        const response = await fetch(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        );

        // Log the response from fetch 
        // Helps me see if it works
        console.log("Genres response:", response);

        // check whether the fetch request was successful
        // response.ok is true for successful responses 
        // if not throw error, send to catch 
        if (!response.ok) {
            throw new Error("Failed to fetch genres.");
        }

        // convert the response body from JSON into JavavScript obj
        const data = await response.json();

        // Log just the array of genres
        // TMDB stores the actual genre list inside data.genres
        console.log("Genres data:", data);
        console.log("Genres list:", data.genres);

        // Return the array of genres obj
        return data.genres;
    } catch (error) {

        // if fail log error to help with debbugging 
        console.error("Genres fetch error:", error);

        // Return empty array so app doesnt crash - safe fallback
        return [];
    }
}

