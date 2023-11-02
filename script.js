let computerSelection , playerSelection, result;
let playerScoreCounter = 0;
let computerScoreCounter = 0;
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector(".reset");
const computerScore = document.querySelector("#computer-score");
const playerScore = document.querySelector("#player-score");
computerScore.textContent = computerScoreCounter;
playerScore.textContent = playerScoreCounter;
rockButton.addEventListener("click",()=> runGame("rock"));
paperButton.addEventListener("click",()=> runGame("paper"));
scissorsButton.addEventListener("click",()=> runGame("scissor"));
resetButton.addEventListener("click", () => resetGame());

function getComputerSelection()
{
    let selectionId;
    const computerChoice = document.querySelector("#computer-choice");
    selectionId = Math.floor((Math.random()*3)+1);
    switch (selectionId){
        case 1:
            computerChoice.textContent = "Rock";
            return "rock";
            break;
        case 2:
            computerChoice.textContent = "Paper";
            return "paper";
            break;
        case 3:
            computerChoice.textContent = "Scissor";
            return "scissor";
            break;
    }
}

function findWinner(computerChoice, playerChoice)
{
    switch (playerChoice)
    {
        case "rock":
            return computerChoice === "scissor"? "win" : computerChoice === "paper" ? "lose" : "draw";
            break;
        case "paper":
            return computerChoice === "rock"? "win" : computerChoice === "scissor" ? "lose" : "draw";
            break;
        case "scissor":
            return computerChoice === "paper"? "win" : computerChoice === "rock" ? "lose" : "draw";
            break;
    }
}

function setImage (imageBox, selection){
    switch (selection) {
        case "rock":
            imageBox.style.backgroundImage = "url(./images/rock.jpg)";
            break;
        case "paper":
            imageBox.style.backgroundImage = "url(./images/paper.jpg)";
            break;
        case "scissor":
            imageBox.style.backgroundImage = "url(./images/scissor.jpg)";
            break;
 
    }

}

function resetGame ()
{
    computerScoreCounter = 0;
    playerScoreCounter = 0;
    computerScore.textContent = computerScoreCounter;
    playerScore.textContent = playerScoreCounter;
    document.querySelector("#computer-choice").textContent = "";
    const playerImage = document.querySelector(".player-image");
    const computerImage = document.querySelector(".computer-image");
    playerImage.style.backgroundImage = "url(./images/question-mark.jpg)";
    computerImage.style.backgroundImage = "url(./images/question-mark.jpg)";
    playerImage.style.border = "3px solid white";
    computerImage.style.border = "3px solid white";
    document.querySelector(".result-text").textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.disabled = true;
}

function SetGameOverState()
{
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.disabled = false;
}


function runGame(playerSelection)
{
    computerSelection = getComputerSelection();

    let winner = 3; //
    const playerImage = document.querySelector(".player-image");
    const computerImage = document.querySelector(".computer-image");

    setImage(playerImage,playerSelection);
    setImage(computerImage,computerSelection);

    result = findWinner(computerSelection,playerSelection);
    if(result === "win")
    {
        console.log ("You win. " + playerSelection + " beats "+ computerSelection);
        playerImage.style.border = "3px solid green";
        computerImage.style.border = "3px solid red";
        playerScoreCounter++;
        playerScore.textContent = playerScoreCounter;
    }
    else if(result === "lose")
    {
        console.log ("You lose. " + computerSelection + " beats "+ playerSelection);
        computerImage.style.border = "3px solid green";
        playerImage.style.border = "3px solid red";
        computerScoreCounter++;
        computerScore.textContent = computerScoreCounter;
    }
    else
    {
        console.log ("It's a draw.");
        computerImage.style.border = "3px solid white";
        playerImage.style.border = "3px solid white";        
    }
    winner = computerScoreCounter === 5 ? 2 : playerScoreCounter === 5 ? 1 : 3;
    if(winner === 1)
    {
        document.querySelector(".result-text").textContent = "You win. Press the Reset button to play again!";
        SetGameOverState();
    }
    else if(winner === 2)
    {   
        document.querySelector(".result-text").textContent = "Computer win. Press the Reset button to play again!";
        SetGameOverState();
    }



}


//prompt("You chose " + playerSelection + " and computer chose " + computerSelection + ". You "+ result);