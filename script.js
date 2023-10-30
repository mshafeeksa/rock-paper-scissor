let computerSelection , playerSelection, result;

function getComputerSelection()
{
    let selectionId;
    selectionId = Math.floor((Math.random()*3)+1);
    switch (selectionId){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
    }
}

function getPlayerSelection()
{
    let playerInput = prompt("Enter your choice from rock,paper and scissor:");
    if (playerInput != null && (playerInput.toLowerCase() === "rock" || playerInput.toLowerCase() === "paper" || playerInput.toLowerCase() === "scissor"))
        return playerInput;
    else{
        prompt("Invalid input. Enter correct input:");
        return getPlayerSelection();
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


computerSelection = getComputerSelection();
playerSelection = getPlayerSelection();
result = findWinner(computerSelection,playerSelection);
if(result === "win")
    prompt ("You win. " + playerSelection + " beats "+ computerSelection);
else if(result === "lose")
    prompt ("You lose. " + computerSelection + " beats "+ playerSelection);
else
    prompt ("It's a draw.")


//prompt("You chose " + playerSelection + " and computer chose " + computerSelection + ". You "+ result);