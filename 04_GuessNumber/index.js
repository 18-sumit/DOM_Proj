let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // form h toh value server pe jane se rokta h ye method 
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    // validate krega value 1 - 100 k beechme h ki nahi 

    if (guess === '') {
        alert("Please enter a Valid Number")
    } else if (guess < 1) {
        alert("Please enter a Number more than 0")
    } else if (guess > 100) {
        alert("Please enter a  Number less than 100 ")
    } else {
        prevGuess.push(guess)
        numGuess++
        if (numGuess === 10) {
            // displayGuess(guess)
            displayMessage(`Game Over . Random number is ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
            // numGuess++;
        }
    }
}


function checkGuess(guess) {
    // check krega ki guess no random no ke equal h ya nahi 
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too Low`);
    }else if (guess > randomNumber) {
        displayMessage(`Number is too High`);
    }
}



function displayGuess(guess) { // ye clean up bhi bol skte h
    // input box ko clean krega  , previous guess wale array ko aur remaining guess ko update krega    
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;
    // numGuess++;
    remaining.innerHTML =`${10 - numGuess}`
}

function displayMessage(message) {
    // agar guess = random no h to display kro ki aap jeet gye ho . low h toh low bolo , high h toh print kro high h
    lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame() {
    userInput.value ='';
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML =`<h2 id = "newgame">Start new game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}

function newGame() {
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click' , function(e){
    randomNumber =  parseInt(Math.random() * 100 + 1);
    prevGuess =[];
    numGuess = 0;
    guessSlot.innerHTML =''
    remaining.innerHTML= `${10}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);

    playGame = true ;
    })
}