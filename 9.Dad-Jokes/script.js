/*eslint quote-props: ["error", "always"]*/
/*eslint-env es6*/

const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEle.innerHTML = data.joke
        })
}

jokeBtn.addEventListener('click', generateJoke)
