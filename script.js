answer = 0;
let maxNumber = 0;
let tries = 0;


function startGame(max) {
maxNumber = max;
answer = Math.floor(Math.random() * maxNumber) + 1;
tries = 0;


document.getElementById('mode-screen').classList.add('hidden');
document.getElementById('game-screen').classList.remove('hidden');
document.getElementById('hint').textContent = `1부터 ${maxNumber} 사이의 숫자입니다`;
}


const guessBtn = document.getElementById('guessBtn');


if (guessBtn) {
guessBtn.addEventListener('click', () => {
const input = document.getElementById('guessInput');
const guess = Number(input.value);


if (!guess) return;


tries++;
document.getElementById('tries').textContent = `시도 횟수: ${tries}`;


if (guess === answer) {
document.getElementById('hint').textContent = `정답! (${answer})`;
} else if (guess < answer) {
document.getElementById('hint').textContent = 'Up!';
} else {
document.getElementById('hint').textContent = 'Down!';
}


input.value = '';
});
}
