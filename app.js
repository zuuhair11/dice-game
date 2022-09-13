// References to the necessary DOM nodes
const message = document.querySelector('#message');
const player1ScoreBoard = document.querySelector('#player1Scoreboard');
const player2ScoreBoard = document.querySelector('#player2Scoreboard');

const player1Dice = document.querySelector('#player1Dice');
const player2Dice = document.querySelector('#player2Dice');

const rollBtn = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');


let player1Score = 0;
let player2Score = 0;
let player1Turn = true;


rollBtn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if(player1Turn) {
        message.textContent = 'Player 2 Turn';

        // Show the dice number (1 - 6)
        player1Dice.textContent = randomNumber;
        // Save the score
        player1Score += randomNumber;
        // Display the score
        player1ScoreBoard.textContent = player1Score;

        // Switch to player 2
        player1Turn = false;

        // Remove the shadow from the palyer1 Dice
        player1Dice.classList.remove('active');
        // Add the shadow to the player2 Dice
        player2Dice.classList.add('active');
        

    } else {
        message.textContent = 'Player 1 Turn';

        // Show the dice number (1 - 6)
        player2Dice.textContent = randomNumber;
        // Save the score
        player2Score += randomNumber;
        // Display the score
        player2ScoreBoard.textContent = player2Score;
        
        // Switch to player 2 
        player1Turn = true;

        // Remove the shadow from the palyer2 Dice
        player2Dice.classList.remove('active');
        // Add the shadow to the palyer1 Dice
        player1Dice.classList.add('active');
    }
    
    if(player1Score >= 20) {
        message.textContent = 'Player 1 has won 🥳';
        showResetBtn();
    }
    if(player2Score >= 20) {
        message.textContent = 'Player 2 has won 🎉';
        showResetBtn();
    }

    function showResetBtn() {
        rollBtn.style.display = 'none';
        resetBtn.style.display = 'block'; 
    }
});


// Play again the game
resetBtn.addEventListener('click', function() {
    reset();

});
function reset() {
    // window.location.reload();
    message.textContent = 'Player 1 Turn';

    player1Score = 0;
    player2Score = 0;
    player1ScoreBoard.textContent = player1Score;
    player2ScoreBoard.textContent = player2Score;

    player1Dice.textContent = '-';
    player2Dice.textContent = '-';

    player1Dice.classList.add('active');
    player2Dice.classList.remove('active');
    player1Turn = true;

    resetBtn.style.display = 'none';
    rollBtn.style.display = 'block';

}
