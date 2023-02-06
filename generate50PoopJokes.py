import requests
import json

API_KEY = "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"
API_ENDPOINT = "https://api.openai.com/v1/completions"

jokes = []

headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
    }

for i in range(50):
    data = {
        "model": "text-davinci-003",
        "prompt": "Generate a poop joke.",
        "max_tokens": 75,
        "temperature": 0.5
    }
    
    response = requests.post(API_ENDPOINT, headers=headers, data=json.dumps(data))
    
    if response.status_code == 200:
        response_text = json.loads(response.text)
        if 'choices' in response_text:
            joke = response_text['choices'][0]['text']
            jokes.append(joke)
        else:
            print(f"Error: 'choices' key not found in response for request {i}")
    else:
        print(f"Error: Request failed with status code {response.status_code} for request {i}")

with open("poop_jokes.txt", "w") as f:
  for joke in jokes:
    f.write(joke + "\n")