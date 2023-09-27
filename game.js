const options = ["rock", "paper", "scissors"];

//to enable the computer pick randomly
const getComputerChoice = () => {
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

// to check the player input
const getPlayerChoice = (choice) => {

    let mainChoice = choice.toLowerCase();
    if (mainChoice === options[0] || mainChoice === options[1] || mainChoice === options[2]){
        return mainChoice;
    }else{
        console.log("please choose rock, paper or scissors");
    }
}

// to compare the choices of the user and the computer
const determineWinner = (playerSelection, computerSelection) => {
    let win = "you win!";
    let lose = "you lose!";

    if(playerSelection === computerSelection){
        return "this game is a tie";
    }

    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            return `${lose} ${computerSelection} beats ${playerSelection}`;
        }else{
            return `${win} ${playerSelection} beats ${computerSelection}`;
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            return `${lose} ${computerSelection} beats ${playerSelection}`;
        }else{
            return `${win} ${playerSelection} beats ${computerSelection}`;  
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            return `${lose} ${computerSelection} beats ${playerSelection}`;
        }else{
            return `${win} ${playerSelection} beats ${computerSelection}`;
        }
    }
}


const playRound = () => {

    // the user can change the "rock" to any choice he/she prefers
    const playerSelection = getPlayerChoice("rock");
    const computerSelection = getComputerChoice();
    

    console.log(`you played ${playerSelection}`);
    console.log(`computer threw ${computerSelection}`);

    console.log(determineWinner(playerSelection, computerSelection));
}

const game = () => {
    for(let i = 0; i < 5; i++){
        playRound();
    }
}

game();