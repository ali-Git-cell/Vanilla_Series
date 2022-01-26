const JokeElite = document.querySelector("#joke");
const JokeBtn = document.querySelector("#jokeBtn");

async function createJoke() {
  const conf = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", conf);
  const data = await res.json();
  JokeElite.innerHTML = data.joke;
}

JokeBtn.addEventListener("click", createJoke);
