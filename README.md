
# Weekend Watchlist

`**Project:** SBA 320H - React Web Application Project ` 
**Date:** July 29, 2026  
**Program:** Per Scholas Software Engineering



The content, context, and objective of your application is entirely up to you. Be creative, and think of something that will both allow you to demonstrate the skills you've acquired thus far and solve a need (practical or fictional).

Once you have an idea for your project, keeping the below requirements and resources in mind, speak to your instructor to have your project approved before you begin. This will ensure you're on the right track from the start, and not running into unforseen issues or wasting time on something that will not satisfy the assignment's objectives.


📑 Requirements
Your application must meet these requirements to pass (this it your Minimum Viable Product):

Built with HTML, CSS, JavaScript, REACT, and Redux Toolkit.
Hosted on Heroku or Netlify.
Frequent commits to GitHub.
A README.md file in your GitHub repository with:

Explanations of the technologies used.
Explanations of the approach taken.
A link to your live site.
Usage instructions, if relevant.
Unsolved problems.
etc.
Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.

➕ Bonus Features
The following are not required:

Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc.
Look into localstorage so you can save data to the user's browser.

📋 Finding an API
Below is a non-exhaustive list of some free APIs you can use. There are many APIs out there, so if you find one not on this list that you'd like to use, feel free! Please note that some may require signing up for an API key (e.g. the Marvel API).

Marvel
Weather
News
Giphy
Pokemon
Card Deck
Google Books
City of Chicago
Beer
Chuck Norris
Rick and Morty
Lastly, the following sites collect a bunch of APIs together, so you can take a look through their libraries and try to find an API that interests you!

Public APIs List
Rapid API
Note, however, that not all APIs are free, and many listed may require payment. We highly suggest to use a free API for your first project dealing with one.

Please be extremely thorough when finding an API you'd like to use for your project. In other words, please ensure you have properly vetted your API by taking the time to read its documentation and even "hitting a few endpoints".

Do this BEFORE you decide to seek instructor approval.

This ensures you're taking the time to test the API, see how you can get it to respond with data, and see what that data looks like.


💻 Make a New GitHub Repo
After your project has been approved, make a new GitHub repo for your project. You will be deploying this project onto GitHub pages, so you must name your repo yourgithubusername.github.io (for example, if my github username was octocat I would do: octocat.github.io).

From there, follow the instructions outlined by GitHub themselves on GitHub Pages.

Extra: Want your own domain name?
You can also host your github pages with your own domain name.
Here is a walkthrough from namecheap, one web hosting service.
If you choose to do this, it is best to save it for last so that you know you have time to finish the project's requirements.


💾 Project Submission
Submit the link to your GitHub repository to Canvas when you are finished.

You will present your project and show your code to classmates and instructors.

Being able to explain and articulate your process, objectives, blockers, and successes is an important part of being a developer, but don't be intimidated by the "presentation" aspect. These are your peers, and they're in the same position as you are.


🤝 Need Help with your Project?
Seek out help online within documentation, stackoverflow, or other resources.
Seek out help from your classmates (but make sure to do your own work).
Seek out help from your instructors.

✔ Suggested Ways to Get Started
If you need help getting started with the project, try completing these steps:

Wireframe: Make a drawing of what your app will look like in all of its stages.

What does it look like as soon as you log on to the site?
What does it look like once data is retrieved?
Break the project down into different components and brainstorm each component individually:

Data
Presentation
Views
Style
DOM Manipulation
Commit early, commit often. Don’t be afraid to break something, because you can always go back in time to a previous version.
Consult documentation resources (MDN, RTK, etc.) to better understand what you’ll be getting into.
Think about:

Creativity

Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?
Code Quality

Did you follow code style guidelines and best practices covered in class, such as spacing, indentation, modularity, and semantic naming?
Did you comment your code as your instructors have in class?
Problem Solving

Are you able to defend why you implemented your solution in a certain way?
Can you demonstrate that you thought through alternative implementations?

▶ Example Project Functionality
Below is a shopping application built using React that can serve as an example or inspiration for your own project. Try to make an application that is simple enough that you can complete it in the time allotted, but complex enough to show off React's core strengths.

Explore this project on its own page.


Consider framing your project around a problem. For example, maybe the problem is that my friends and I always have weekly movie nights and we're starting to run out of movies to watch. So, I thought about creating an app where I can search for movies and see their summaries. Or maybe I could create an app to help schedule the movie nights with what movie we'll be watching, etc.


📚 Useful Resources
MDN Javascript Docs
React Docs
GitHub Pages


************************************************************************
## Weekend Watchlist 

Weekend Watchlist is a React web application that uses the TMDB API to help users browse movies, search by title, filter by genre, and save movies to a personal watchlist.


### Project Goal
Build a simple movie discovery app that meets the SBA requirements:
- React application
- External API request
- Context or reducer for state
- Frequent GitHub commits
- Deployed live site
- README documentation

### Tech Stack
- HTML
- CSS
- JavaScript
- React
- TMDB API
- Context API
- localStorage
- Netlify

### Step-by-Step Development Plan



## 1. Plan the app features and layout
- Decide on the core features:
  - Show trending movies
  - Search movies
  - Filter by genre
  - Add movies to watchlist





## 2. Test the TMDB API
**What I am doing:**
- Create a TMDB account
- Get an API key
- Test a few endpoints in the browser or documentation
- Confirm what movie data is available





## 3. Set up the React project

- Create the project
- Clean up starter files
- Set up folders such as:
  - components
  - context
  - services
  - styles

**Why I am doing this:**
A clean structure makes the project easier to build, debug, and maintain as it grows.







## 4. Build the basic UI structure

- Create the main layout
- Add placeholders for:
  - Header
  - Search bar
  - Genre filter
  - Movie list
  - Watchlist section

  src/
  components/
    Header.jsx
    SearchBar.jsx
    GenreFilter.jsx
    MovieList.jsx
    MovieCard.jsx
    Watchlist.jsx
  context/
    WatchlistContext.jsx
  services/
    tmdb.js
  styles/
    App.css
    index.css  
  App.jsx
  main.jsx
.env

- `App.jsx`
  - main layout
  - renders all sections

- `Header.jsx`
  - app title

- `SearchBar.jsx`
  - search input and button

- `GenreFilter.jsx`
  - dropdown for genres

- `MovieList.jsx`
  - maps through movies and renders `MovieCard`

- `MovieCard.jsx`
  - displays one movie

- `Watchlist.jsx`
  - shows saved watchlist movies

- then wire them into `App.jsx`


**Why I am doing this before fetching data:**
This gives the app structure first so I know where the data will go once the API is connected.

**Also set up the `.env` now** before you start fetching and add it to 
`.gitignore.`





## 5. Fetch trending movies from TMDB
- Make an API request with `fetch`
- Load trending or popular movies when the app starts
- Render movie cards on the page

used starter code for all components:

```jsx
export default function Header() {
  return <h1>Weekend Watchlist</h1>;
}
```
and one for each 
- `SearchBar.jsx`
- `GenreFilter.jsx`
- `MovieList.jsx`
- `Header.jsx`
- `MovieCard.jsx`
- `Watchlist.jsx`

- ` Fetch TMDB data`
- store it in state
- confirm it appears in the console or on screen

1. set up `tmdb.js`
2. fetch in `App.jsx`
3. store movies in state
4. pass movies to `MovieList`
5. then build `MovieCard`


- `function MovieList({ movies })`
  - receives a `movies` prop from the parent component
- `movies.map(...)`
  - loops through the movies array
  - returns a new `<p>` element for each movie
- `key={movie.id}`
  - gives React a unique identifier for each rendered item

**Why I am doing this:**
This proves the API connection works and gets movie data into the DOM, which is a main requirement of the assignment.






## 6. Create reusable movie card components
- Build a `MovieCard` component
- Display poster, title, rating, and overview or release date

**Why I am doing this now:**
Reusable components keep the code organized and make it easier to reuse the same UI for search results and filtered results. And i wanna see the posters.

What each `console.log` is checking:

- `API KEY`
  - checks whether the TMDB API key is being loaded correctly from the `.env` file
  - helps confirm the environment variable is not `undefined`
  - if this is missing or wrong, the API request will fail

- `Fetching trending movies...`
  - confirms that the `getTrendingMovies()` function is running
  - helps show that the fetch request is about to be sent

- `Response`
  - checks the raw response object returned by `fetch()`
  - helps verify whether the request succeeded
  - useful for checking values like:
    - `status`
    - `ok`
    - `url`

- `TMDB data`
  - checks the full JSON object returned by the TMDB API
  - helps you inspect the actual structure of the returned data
  - confirms whether the movie list is inside `data.results`

- `movieData from API in App`
  - checks the array returned from `getTrendingMovies()` after the API call finishes
  - helps confirm that `App.jsx` is receiving the movie data properly

- `movies state in App`
  - checks whether the `movies` state was updated successfully with `setMovies(movieData)`
  - helps confirm the fetched data is now stored in React state

- `MovieList received movies`
  - checks that the `movies` state was passed down from `App.jsx` into `MovieList` as a prop
  - confirms prop passing is working correctly

- `MovieList movies length`
  - checks how many movies are in the array being rendered
  - helps confirm whether the list has data before mapping through it

- `Mapping movie`
  - checks each individual movie object during the `.map()` loop
  - helps inspect the contents of each movie before rendering

- `Movie ID`
  - checks that each movie has a valid unique `id`
  - important because React uses that `id` as the `key`

- `Movie title`
  - checks that each movie object contains the `title` property
  - confirms the title can be displayed correctly in the UI

- `MovieCard received movie`
  - checks that the single movie object is being passed properly into the `MovieCard` component
  - confirms child components are receiving the correct props

- `MovieCard imageUrl`
  - checks the final image URL built from `movie.poster_path`
  - helps verify that the poster URL is correct or that the fallback image is being used when no poster exists

- `Fetch error`
  - checks whether an error happened during the API request
  - helps identify issues such as:
    - invalid API key
    - network problems
    - incorrect endpoint
    - failed response parsing


- create `MovieList.css`
- create `MovieCard.css`
- import both
- check grid layout works
- change background and font to blk and arial in `App.css`
- commit

### Header Styling
I styled the header to give the app a more cinematic movie-night look. I imported Google Fonts in `index.html` and used `Cinzel` for the main titles to create a dramatic feel. The header includes the app title, **Weekend Watchlist**, and a short subtitle to explain the purpose of the app.

### Movie List Styling
I created a separate `MovieList.css` file to style the trending movie section. I used CSS Grid so the movie cards can automatically adjust across the page. This keeps the layout organized and makes it easier to display multiple movie results in a clean way.

### Movie Card Styling
I styled each movie card with a dark background, rounded corners, spacing, and a soft box shadow. I also added a hover effect using `transform: translateY(-5px)` so each card slightly lifts when hovered over. This makes the UI feel more interactive and polished.







## 7. Add search functionality
- Create a search input
- Let users search movies by title
- Show matching results from TMDB

### Search Functionality
I added search functionality so users can look up movies by title instead of only viewing trending movies. The search feature starts in the `SearchBar` component, where the user types a movie title into a controlled input field. When the form is submitted, the query is passed to `App.jsx`, which calls the `searchMovies()` function in `tmdb.js`. That function sends a request to the TMDB search endpoint and returns matching movie results, which are then stored in state and displayed in the movie list.

### Why I Added Search
I added search after the initial API fetch was already working because it was easier to build on top of a stable data flow. First, I confirmed that the app could successfully fetch and render trending movies. Once that worked, I added user input and dynamic search so the app became more interactive and practical.

**Why I am doing this after the initial fetch:**
It is easier to add search once the basic fetch and rendering already work.


### Console Logs Used for Debugging
I used `console.log()` statements throughout the project to confirm that functions were running, API requests were being sent successfully, and movie data was being returned in the expected format. I also logged response objects and results arrays to better understand the TMDB API structure. I used `console.error()` in catch blocks to identify request failures without crashing the application.

- `console.log("Fetching trending movies...")`
  - confirms that `getTrendingMovies()` is running
  - shows the app has started the API request process
  - useful for verifying the function is actually being called

- `console.log("Response:", response)`
  - shows the raw `Response` object returned by `fetch()`
  - lets you inspect important details like:
    - `status`
    - `ok`
    - `url`
    - `type`
  - helps confirm whether the request to TMDB succeeded before converting it to JSON

- `console.log("TMDB data:", data)`
  - shows the full JavaScript object returned from `response.json()`
  - helps you inspect the exact structure of the TMDB API response
  - confirms whether the movie array exists inside `data.results`

- `console.error(error)`
  - logs any error caught in the `catch` block
  - helps debug problems such as:
    - bad API key
    - failed fetch request
    - wrong endpoint
    - network issues

For your search function logs:

- `console.log("Search query:", query)`
  - confirms the search function received the user's typed movie title correctly

- `console.log("Search response:", response)`
  - shows the raw fetch response from the search endpoint
  - helps verify the search request reached TMDB successfully

- `console.log("Search data from TMDB:", data)`
  - shows the full JSON object returned from the movie search request
  - helps inspect how TMDB structures search results

- `console.log("Search movie results:", data.results)`
  - shows only the array of movie objects from the search response
  - confirms the app is pulling the correct property to display search results

- `console.error("Search movies error:", error)`
  - logs any problem that happens during the search request
  - helps debug broken search behavior without crashing the app


I added `searchMovies()` to `tmdb.js` to keep all TMDB fetch logic in one place. This separates API code from UI code and makes the app easier to organize and maintain.

### Search Bar Component
I created a `SearchBar` component so users can search for movies by title. This component uses React state to keep track of what the user types into the input field. When the form is submitted, it prevents the page from refreshing, checks that the input is not empty, and then sends the search query to the parent component using the `onSearch` prop.

- user types in `SearchBar`
- `query` updates in local state
- submit calls `onSearch(query)`
- `App.jsx` runs `handleSearch`
- `searchMovies(query)` fetches from TMDB
- `setMovies(searchResults)` updates the UI

Console logs meaning:
- `Search input:`
  - confirms typing works
- `Search submitted:`
  - confirms form submit works
- `handleSearch query:`
  - confirms `App` received the query
- `searchResults:`
  - confirms TMDB returned results

  ### Search Testing
I tested the search feature by typing movie titles into the search bar and checking whether the results updated correctly on the page. I also used `console.log()` statements to debug each step of the process, including:
- user input in the search field
- form submission
- query passed to `handleSearch()`
- API response from TMDB
- search results array returned to state

### Movie Card Styling
I styled each movie card using a separate CSS file to make the movie list more polished and easier to read. The cards use a dark background, white text, rounded corners, spacing, and a soft shadow to stand out from the page. I also added a hover effect so each card lifts slightly when the user hovers over it, making the interface feel more interactive.

### Short Sum
At this stage, the app can fetch trending movies, display them in styled movie cards, and let users search for movies by title using the TMDB API. I also improved the UI by adding hover effects, spacing, and a fallback design for movies with missing poster images.


## 8. Add genre filtering
- Fetch genre data from TMDB
- Create a dropdown or button filter
- Show movies by selected genre

**Why I am doing this after search:**
Filtering is easier once the app already knows how to fetch and display movie data.





MDN 
## MDN Resources Used

- CSS Grid Layout  
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout

- box-shadow  
  https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

- transition  
  https://developer.mozilla.org/en-US/docs/Web/CSS/transition

- transform  
  https://developer.mozilla.org/en-US/docs/Web/CSS/transform

- translateY()  
  https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY

- :hover  
  https://developer.mozilla.org/en-US/docs/Web/CSS/:hover

- Forms  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms

- Event.preventDefault()  
  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

- encodeURIComponent()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

- Array.prototype.map()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- `Array.map()`
  - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map`

- `Conditional operator` for:
  - `movie.poster_path ? ... : ...`
  - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator`

- `Template literals`
  - for building the image URL
  - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals`

- `Functions`
  - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions`

- `JavaScript objects`
  - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects`

**`Array.prototype.map()`**:
- `map()`  
  `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map`

- **Arrow functions**
  `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions`

- **Destructuring function parameters** for `({ movies })`
  `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring`

- **JavaScript functions**
  `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions`

- **React rendering-list**
  - `https://react.dev/learn/rendering-lists`

- `fetch()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

- `async function`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

- `await`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

- `try...catch`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

- `response.ok`
  - from the Response interface
  - https://developer.mozilla.org/en-US/docs/Web/API/Response

- `response.json()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Response/json

- `encodeURIComponent()`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

- template literals
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

```md
### MDN Resources for Search Functionality

- Fetch API  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

- async function  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

- await  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

- try...catch  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

- Response interface  
  https://developer.mozilla.org/en-US/docs/Web/API/Response

- Response.json()  
  https://developer.mozilla.org/en-US/docs/Web/API/Response/json

- encodeURIComponent()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

- Template literals  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
```

- React `useState`
  - `https://react.dev/reference/react/useState`

MDN for the JavaScript and browser parts:

- forms
  - `https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms`

- `Event.preventDefault()`
  - `https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault`

- `String.prototype.trim()`
  - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim`

- functions
  - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions`

- input/change event
  - `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event`

- `preventDefault()`
  `https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault`
- `encodeURIComponent()`
  `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent`
- forms
  `https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms`



`Samuel github: https://github.com/Sammy65433/SBA-320H---React-Web-Application-Project`


`TMDB movie Docs` 
https://developer.themoviedb.org/docs/getting-started

`TMDB movie Docs for search movie` 
https://developer.themoviedb.org/reference/search-movie

`TMDB movie API`
https://www.themoviedb.org/settings/api

`TMDB site` 
https://www.themoviedb.org/tv
