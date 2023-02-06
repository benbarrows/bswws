var jokes = [];

// read the jokes from the file and store them in an array
fetch('poop_jokes.txt')
  .then(response => response.text())
  .then(text => {
    jokes = text.split('\n');
  });

// function to randomly select a joke and display it
function displayJoke() {
  var jokeIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById('joke').innerHTML = jokes[jokeIndex];
}

// call the displayJoke function every 24 hours
setInterval(displayJoke, 24 * 60 * 60 * 1000);
