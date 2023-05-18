const btn = document.getElementById('btn')
const joke = document.getElementById('joke')
const apiKey = "Zfbj3IG0B7RyYz/mZW9GNw==Sk7925MBGabPDuaZ"
const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"

async function getJoke() {
    try {
        joke.innerText = "Working on my Humor, Wait..."
        btn.disabled = true;
        btn.innerText = "Loading..."
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btn.disabled = false;
        btn.innerText = "Tell me an another joke"

        console.log(data)

        joke.innerText = data[0].joke
    } catch (error) {
        joke.innerText = "An error happened, try again later"
        btn.disabled = false;
        btn.innerText = "Tell me an another joke"
        console, log(error)
    }


}

btn.addEventListener("click", getJoke)