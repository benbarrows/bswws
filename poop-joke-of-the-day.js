async function getJoke() {
  const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      prompt: 'Generate a poop joke.',
      max_tokens: 100,
      n: 1,
      stop: '\n',
      temperature: 0.5
    })
  });
  const data = await response.json();
  const joke = data.choices[0].text;
  document.getElementById("joke").innerHTML = joke;
}

getJoke();
setInterval(getJoke, 24 * 60 * 60 * 1000);
