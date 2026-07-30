import { useState } from "react";
import "./../styles/SearchBar.css"

// onSearch is a function passed down from App.jsx and will be called when the user submits the search form.
export default function SearchBar({ onSearch }) {
  
  
  // query stores the current text inside the input box.
  // setQuery is the function used to update that state.
  // The initial value is an empty string because the input starts blank.
  const [query, setQuery] = useState("");

  // This function runs when the user submits the form.
  function handleSubmit(event) {
    
    // Prevent the browser's default form behavior,
    // which would reload the page when the form is submitted.
    event.preventDefault();

    // Log the submitted search text to confirm what the user searched for.
    console.log("Search submitted:", query);

    // If the input is empty or only contains spaces,
    // trim() removes extra spaces from the beginning and end of the string.
    if (!query.trim()) return;

    // Call the onSearch function passed from App.jsx
    // and send the current query value to it.
    // This allows the parent component to fetch movie results from the API.
    onSearch(query);

    // Clear the input box after the form is submitted.
    setQuery("");
  }

  return (
    // The form uses onSubmit so pressing Enter or clicking the button
    <form onSubmit={handleSubmit}>
      
      {/* Text input for the movie search */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}

        // runs every time the user types in the input.
        onChange={(event) => {
          
          // Log the current input value to confirm typing is working.
          console.log("Search input:", event.target.value);

          // event.target.value is the current value inside the input field.
          setQuery(event.target.value);
        }}
      />

      {/* Submit button for the form */}
      <button type="submit">Search</button>
    </form>
  );
}
