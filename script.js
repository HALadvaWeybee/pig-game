'use strict';

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const player = document.querySelector('.player');
const btnNew = document.querySelector('.btn--new');

let curr_score = 0, playing = true;


function rollDice() {
    if(playing) {
        let randomNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    if (randomNumber == 1) {
        dice.setAttribute('src', 'dice-1.png');
        if (player0.classList.contains('player--active')) {
            curr_score = 0;
            score0.innerHTML = 0;
            current0.innerHTML = 0;

            player0.classList.remove('player--active');
            player1.classList.add('player--active');
        } else if (player1.classList.contains('player--active')) {
            curr_score = 0;
            score1.innerHTML = 0;
            current1.innerHTML = 0;
            player0.classList.add('player--active');
            player1.classList.remove('player--active');
        }
    } else if (randomNumber == 2) {
        dice.setAttribute('src', 'dice-2.png');
    } else if (randomNumber == 3) {
        dice.setAttribute('src', 'dice-3.png');
    } else if (randomNumber == 4) {
        dice.setAttribute('src', 'dice-4.png');
    } else if (randomNumber == 5) {
        dice.setAttribute('src', 'dice-5.png');
    } else if (randomNumber == 6) {
        dice.setAttribute('src', 'dice-6.png');
    }

    if (player0.classList.contains('player--active') && randomNumber != 1) {
        curr_score += randomNumber;
        current0.innerHTML = curr_score;
    } else if (randomNumber != 1) {
        curr_score += randomNumber;
        current1.innerHTML = curr_score;
    }
    }
}
btnRoll.addEventListener('click', rollDice);

btnHold.addEventListener('click', () => {
    if (player0.classList.contains('player--active') && playing) {
        console.log('hello ' + curr_score + " " + typeof curr_score);
        score0.innerHTML -= (-Number(curr_score));
        curr_score = 0;
        // current0.innerHTML = 0;

        if (score0.innerHTML >= 100) {
            curr_score = 0;
           
            document
                .querySelector('.player--0')
                .classList.add('player--winner');
            document
                .querySelector('.player--0')
                .classList.remove('player--active');
            // btnRoll.removeEventListener('click', rollDice);
            playing = false;
            dice.classList.add('hidden');
        } else {
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
            current0.innerHTML = 0;
            playing = true;
        }
    } else if (player1.classList.contains('player--active') && playing) {
        console.log('hello ' + curr_score + " " + typeof curr_score);
        score1.innerHTML -= (-Number(curr_score));
        curr_score = 0;
        // current1.innerHTML = 0;

        if (score1.innerHTML >= 100) {
            curr_score = 0;
            
            document
                .querySelector('.player--1')
                .classList.add('player--winner');
            document
                .querySelector('.player--1')
                .classList.remove('player--active');
            // btnRoll.removeEventListener('click', rollDice);
           
            dice.classList.add('hidden');
            playing = false;
        } else {
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
            current1.innerHTML = 0;
            playing = true;
        }
    }
});

btnNew.addEventListener('click', () => {
    score0.innerHTML = 0;
    score1.innerHTML = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;
    
    dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});