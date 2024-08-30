"use strict";

const fetchPokemonById = id => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
  ).then(r => r.json());
};

fetchPokemonById(22)
  .then(onFetchSuccess)
  .catch(onFetchError);

function onFetchSuccess(pokemon) {
  // console.log("Success. I found Pokemon");
  // console.log("Pokemon:", pokemon);
}

function onFetchError(error) {
  console.log("Error!!!");
  console.log(error);
}

// ============== themoviedb ================

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTRjZWViMmYwYTcyNmI4OTg2ODE1ZjgzZTQyNTIwNSIsInN1YiI6IjYxODZmNDM0YzVjMWVmMDA4ODE2NTFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.69us1fdEh7CUNzh6K7538_BkiVWh07ikbSoJ93Cy--s",
  },
};

// "id": 967847, "Ghostbusters: Frozen Empire"

fetch(
  "https://api.themoviedb.org/3/search/movie?query=batman&page=1&api_key=c14ceeb2f0a726b8986815f83e425205&append_to_response=videos&language=ru",
  options,
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// fetch(
//   "https://api.themoviedb.org/3/trending/movie/week",
//   options,
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// =================== Horse race ===================

const horses = [
  "Sabrina",
  "Amadeus",
  "Zeus",
  "Apple",
  "Flying Fox",
];

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(
    ".js-results-table > tbody",
  ),
};

refs.startBtn.addEventListener("click", onStart);

function onStart() {
  console.log(
    "%c Race is started",
    "color:red; font-size: 16px;",
  );
  raceCounter += 1;
  // create array of promises
  const promises = horses.map(run);
  // console.log(promises);

  updateWinnerField("");
  updateProgressField("Race is started");
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    console.log(
      `%c ${horse} is Winner, finished by ${time} seconds`,
      "color: gold; font-size: 16px;",
    );
    updateWinnerField(
      `${horse} is Winner, finished by ${time} seconds`,
    );
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(horse => {
    console.log(
      "%c The race has finished",
      "color: green; font-size: 16px;",
    );
    console.table(horse);
    updateProgressField("The race has finished");
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML("beforeend", tr);
}

// run one horse
function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(1000, 3000);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
