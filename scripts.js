const jokes = {
  // Put the list of jokes here, each in quotes and separated by a comma
  "What did the poop say to his kid?": "Stop being a little turd.",
  "What did the poo say when it was proved wrong?": "You have a good 'poo'int!",
  "What did the poop say to his best friend?": "You're the shit, man!",
  "What did the poop say when it arrived at work?": "Crap, I'm late!",
  "What did the poop say when it went skydiving?": "I'm dropping in!",
  "Why was the turd such a jerk to the waiter?": "Because it was a piece of shit.",
  "What did the poop yell when it jumped into the pool?": "I'm a little turd, but I'm making a big splash!",
  "What did the poop say when it hit the fan?": "Oh crud.",
  "What did the poop say when it was asked why it's so chill?": "It said: 'Because I just go with the flow.'",
  "I ate four cans of alphabet soup yesterday.": "Then I had probably the biggest vowel movement I've ever had.",
  "Have you seen the movie Diarrhea?": "Probably, because it leaked and they had to release it early.",
  "What do you call a vegetarian with diarrhea?": "Salad Shooter.",
  "What did the poo say to the fart?": "You blow me away.",
  "What's the true definition of bravery?": "Chancing a fart when you know you have diarrhea.",
  "What do you get when you poop in your overalls?": "Dung-arees.",
  "Have you seen that new movie 'Constipated'?": "It hasn't come out yet.",
  "Did you know that when you say the word 'poop', your mouth does the same motion as your bum hole?": "The same is true for the phrase, 'explosive diarrhea'.",
  "Poop jokes aren't my favorite jokes.": "But they're a solid #2.",
  "How do you get the bathroom unlocked in a hurry?": "With a doo-key.",
  "If pooping is a call of nature.": "Then is farting a missed call?",
};

function animateOuthouse() {
  const outhouse = document.querySelector('.outhouse-animation');
  // Remove existing animation class if any
  outhouse.classList.remove('wiggle-animation');
  
  // Trigger reflow to restart animation
  void outhouse.offsetWidth;
  
  // Add animation class
  outhouse.classList.add('wiggle-animation');
  
  // Remove class after animation completes
  setTimeout(() => {
    outhouse.classList.remove('wiggle-animation');
  }, 500);
}

function displayJoke() {
  // Generate a random index for the joke to display
  const jokeIndex = Math.floor(Math.random() * Object.keys(jokes).length);
  const jokeQuestion = Object.keys(jokes)[jokeIndex];
  const jokeAnswer = jokes[jokeQuestion];

  const jokeEl = document.getElementById("joke-text");
  jokeEl.innerHTML = jokeQuestion;

  const btn = document.getElementById("joke-btn");
  btn.textContent = "Show Answer";
  btn.style.display = "block";
  
  // Remove any existing event listeners
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  
  newBtn.addEventListener("click", function() {
    jokeEl.innerHTML = `${jokeQuestion}<br><br><strong>${jokeAnswer}</strong>`;
    this.textContent = "New Joke";
    
    // Animate the outhouse when showing the punchline
    animateOuthouse();
    
    this.removeEventListener("click", arguments.callee);
    this.addEventListener("click", function() {
      displayJoke();
      
      // Animate the outhouse when showing a new joke
      animateOuthouse();
    });
  });
}

// Initialize the joke display when the page loads
window.addEventListener("DOMContentLoaded", function() {
  displayJoke();
  
  // Add click event to the outhouse
  const outhouse = document.getElementById('outhouse-gif');
  if (outhouse) {
    outhouse.addEventListener('click', function() {
      displayJoke();
      animateOuthouse();
    });
  }
});
