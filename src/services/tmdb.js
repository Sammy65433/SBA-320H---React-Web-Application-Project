// Get API key from .env file
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// TMDB base URL
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch trending movies for the week
export async function getTrendingMovies() {
    try {
        console.log("API KEY:", API_KEY)
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
