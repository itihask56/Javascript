let randomNumber = parseInt(Math.random()*100)
console.log(randomNumber)
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p');

let prevGuess =[];
let numGuess = 1;
let playGame = true;

if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  //check weather a number is valid or not
  if(isNaN(guess)){
    alert(`please enter a valid number..`);
  }
  else if(guess<1){
    alert(`please enter a number greater than 1`);
  }
  else if(guess>100){
    alert(`please enter a number less than 100`);
  }
  else{
    prevGuess.push(guess);

    if (numGuess===11){
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was:${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess);
    }
    
  }
}

function checkGuess(guess){
  //condtion checked
  //weather the predicted number is correct or low or hig
  //increment of guess
  //append of guess in array if it is low or hight
  //if predicted number is correct then start over 

  if(guess===randomNumber){
    displayMessage(`You guessed it right`);
    endGame();

  }
  else if(guess<randomNumber){
    displayMessage(`Your number is lower than random number`)
  }
  else{
    displayMessage(`your number is higher than the random number`)
  }
  
}

function displayGuess(guess){
  //
  userInput.value='';
  guessSlot.innerHTML+=` ${guess}`
  numGuess++;
  const remain =remaining.innerHTML=`${11-numGuess}`;
  if(remain==0){
    remaining.innerHTML='0'
  }

}

function displayMessage(message){
  //
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
  
}

function endGame(){
  //
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame()
}

function newGame(){
  //
  const newGameButton = document.querySelector("#newGame");
  ;
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100)
    prevGuess=[]
    numGuess=1;
    guessSlot.innerHTML='';
    lowOrHi.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)

    playGame=true;
  })
 
}
