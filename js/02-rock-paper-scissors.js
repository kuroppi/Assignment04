// USER CHOICE
let userChoice = prompt("Rock, Paper, or Scissors?");
userChoice = userChoice.toUpperCase();

if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {

    // COMPUTER CHOICE
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);

    if (computerChoice === 1) {
        computerChoice = "ROCK";
    } else if (computerChoice === 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }

    // DETERMINE THE WINNER

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "IT'S A TIE!";
        } else if (
            (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (userChoice === "PAPER" && computerChoice === "ROCK") ||
            (userChoice === "SCISSORS" && computerChoice === "PAPER")
        ) {
            return "YOU WIN!";
        } else {
            return "COMPUTER WINS!";
        }
    }

    let result = determineWinner(userChoice, computerChoice);

    // DISPLAY THE RESULT
    alert(`You chose ${userChoice}\nComputer chose ${computerChoice}\n${result}`);

    let playAgain = prompt("Play again? y/n");

    if (playAgain === "y") {
        location.reload();
    } else {
    }

} else {

    alert("Invalid input. Please try again");
    location.reload();
    
}
