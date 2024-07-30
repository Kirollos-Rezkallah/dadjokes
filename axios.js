const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
button.addEventListener("click", addNewJoke);

async function addNewJoke() {
  const jokeText = await dadJokes();
  const newLI = document.createElement("LI");
  console.log(jokeText);
  newLI.append(jokeText);
  jokes.append(newLI);
}

async function dadJokes() {
  try {
    const config = { bodys: { Accept: "application/json" } };
    const req = await axios.get("https://icanhazdadjoke.com/", config);
    return req.data.joke;
  } catch (e) {
    console.log(e);
    return "Sorry! No more jokes, try later :(";
  }
}
