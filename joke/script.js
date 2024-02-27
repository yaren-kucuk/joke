const jokeButton = document.getElementById('jokeButton')
const joke = document.getElementById('joke')
const apıKey = 'vnQABEVtXtNKb0iBkiMoHA==WSQ7YAnAVUHaNGox'
const url = 'https://api.api-ninjas.com/v1/dadjokes?limit='

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apıKey,
    },
}

async function getJoke() {
    try {
      joke.textContent = 'Updating...';
      jokeButton.textContent = 'Loading...';
      jokeButton.disabled = true;
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      jokeButton.disabled = false;
      jokeButton.textContent = 'Tell me a joke';
      joke.textContent = data[0].joke;
    } catch (error) {
      joke.textContent = 'Try again later';
      jokeButton.disabled = false;
      jokeButton.textContent = 'Tell me a joke';
    }
  }
  
  jokeButton.addEventListener('click', getJoke);
