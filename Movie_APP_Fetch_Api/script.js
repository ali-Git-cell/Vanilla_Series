const Api_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${putyourkeyhere}&page=1";

const img_path = "https://image.tmdb.org/t/p/w1280";

const Search_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=${putyourkeyhere}="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(Api_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovie(data.results);
}

function showMovie(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    

       <img src="${img_path + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
       <h3>Overview</h3>
       ${overview};
    </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(Search_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
