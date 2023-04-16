let sequence = [];
let playerSequence = [];
let score = 0;
let gameStarted = false;
const buttonIds = ['#button-1', '#button-2', '#button-3', '#button-4'];




class Simon {
    constructor() {
     
    }
  
    sequence() {
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * buttonIds.length);
            sequence.push(buttonIds[randomIndex]);;
    }
   
function highlightButton(buttonId) {
  $(buttonId).css('background-color', 'black');
 }


function unhighlightButton(buttonId) {
  $(buttonId).css('background-color', '');
}
  }
  
  const john = new Person("John", 30);
  john.greet(); // Output: Hello, my name is John and I'm 30 years old.
  



















// // Generate a random sequence of button ids
// function generateSequence() {
//   for (let i = 0; i < 10; i++) {
//     const randomIndex = Math.floor(Math.random() * buttonIds.length);
//     sequence.push(buttonIds[randomIndex]);
//   }
// }

// // Display the sequence to the player
// function showSequence() {
//   let i = 0;
//   const intervalId = setInterval(() => {
//     if (i >= sequence.length) {
//       clearInterval(intervalId);
//       playerSequence = [];
//       return;
//     }
//     const buttonId = sequence[i];
//     highlightButton(buttonId);
//     setTimeout(() => {
//       unhighlightButton(buttonId);
//     }, 500);
//     i++;
//   }, 1000);
// }



// // Handle player input
// function handleInput(buttonId) {
//   if (!gameStarted) {
//     return;
//   }
//   highlightButton(buttonId);
//   setTimeout(() => {
//     unhighlightButton(buttonId);
//   }, 500);
//   playerSequence.push(buttonId);
//   if (playerSequence.length === sequence.length) {
//     checkSequence();
//   }
// }

// // Check the player's sequence against the computer's sequence
// function checkSequence() {
//   let isCorrect = true;
//   for (let i = 0; i < sequence.length; i++) {
//     if (sequence[i] !== playerSequence[i]) {
//       isCorrect = false;
//       break;
//     }
//   }
//   if (isCorrect) {
//     score++;
//     $('#score').text(`Score: ${score}`);
//     setTimeout(() => {
//       playRound();
//     }, 1000);
//   } else {
//     endGame();
//   }
// }

// // Start a new round of the game
// function playRound() {
//   sequence = [];
//   playerSequence = [];
//   generateSequence();
//   showSequence();
// }

// // End the game
// function endGame() {
//   alert(`Game over! Your score was ${score}.`);
//   gameStarted = false;
//   $('#start-button').prop('disabled', false);
// }

// // Handle the start button click event
// $('#start-button').click(() => {
//   gameStarted = true;
//   $('#start-button').prop('disabled', true);
//   playRound();
// });

// // Handle button clicks
// $('.button').click((event) => {
//   const buttonId = '#' + event.target.id;
//   handleInput(buttonId);
// });


// $(document).ready(() => {
//     gameStarted = true;
//     playRound();
//   });

// generateSequence()
// showSequence()
// endGame