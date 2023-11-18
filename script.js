const adviceId = document.getElementById('adviceId');
const advice = document.getElementById('advice');
const adviceGenBtn = document.getElementById('adviceGenerator');

const url = 'https://api.adviceslip.com/advice'


function adviceGen() {
fetch(url)
    .then(response => response.json())
    .then(data => {
        adviceId.textContent = `#${data.slip.id}`;
        advice.textContent = data.slip.advice
    })
    .catch(error => advice.textContent = error);
}

adviceGen()

adviceGenBtn.addEventListener('click', () => {
    adviceGen()
})