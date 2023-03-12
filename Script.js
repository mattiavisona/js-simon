// NUOVO ESERCIZIO
/* ____________________________________________________________________________
*/

// Stabilisco le varianti
let initialButtonEl = document.getElementById(“initial-button”);
let numberEl = document.getElementById("number");
let inputEl = document.getElementById(“input”);
let finishEl = document.getElementById("finish");
let checkButton = document.getElementById("check");
let randomNumbersArray = createRandomNumbers(5);


const numberEl = [
  document.getElementById("number-1"),
  document.getElementById("number-2"),
  document.getElementById("number-3"),
  document.getElementById("number-4"),
  document.getElementById("number-5")
];


startButtonEl.addEventListener('click', function() {

    
    
    setTimeout(function() {
      
      disappearNumbers(secretNumbersEl);
    
      inputEl.style.display = "block";
    
    }, 3000);
});






checkButton.addEventListener("click", function() {

  let rightNumbersArray = checkNumbers(randomNumbersArray, numberEl);

  endGame(rightNumbersArray, outputTextEl);

});
