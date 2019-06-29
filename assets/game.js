
// making all of the choices for the computer in an array
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
 "s", "t", "u", "v", "w", "x", "y", "z"];

// setting variables for tracking players wins, losses and total guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// these are to declare my variables for future arrays or lists and not objects
var lettersGuessed = [];
var computerGuess = [];


// starting computer letter choice by loading the screen
window.onload = function() {
    // creating a variable for the function to randomize the choices
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // this is to add to my array or list is being the computers first or next choice
	computerGuess.push(compGuess);
	// i dont want to put a console log here for this function because i dont want the hacker to cheat
}


// having the keyboard read your pressed letter
document.onkeyup = function(event) {
    // telling the computer to recognize the key
    var playerGuess = event.key;
    // the push displays the players guess
    lettersGuessed.push(playerGuess);
    // to see if the guesses are working
    console.log(computerGuess[0]);

// establishing an if statement with the requirement of the player choosing the same as the computer guess and having more than 0 guesses left
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
    // this will add to the number of wins
    wins++;
    // this replenishes the number of guesses allowed
    guessesLeft = 9;
    // resets the letters guessed by the player
    lettersGuessed.length = 0;
    // resets the choice of the computer
    computerGuess.length = 0;
    // this establishes a different guess so that the new game can start
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // this resets the computers guess 
    computerGuess.push(compGuess);
    // this shows after the game is won after the first game so one can cheat
	console.log(computerGuess[0]);
}

// this is an outcome if the player guesses wrong with the symbol saying theyre not equal.
// they must also have guesses remaining or the next function begins
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
    // this subtracts the number of guesses within this object
	guessesLeft = guessesLeft-1;
}
// uh oh if you lose this statement will kick in
else {
    // adds those bitter loses together
    losses++;
    //resets the guesses
    guessesLeft = 9;
    // resets the letters guessed by the player
    lettersGuessed.length = 0;
    // resets the choice of the computer
    computerGuess.length = 0;
    // this establishes a different guess so that the new game can start so you can try again
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //adds to the array or list of what the computer has chosen
    computerGuess.push(compGuess);
    // this is so one can totally cheat
	console.log(computerGuess[0]);
}
// this is to update the html display and show...
var html = "<p>Guess what letter I'm thinking of!</p>" +
//... the number of those glorious wins being updated...
          "<p>Wins: " + wins + "</p>" +
          //... the update of those dang losses...
          "<p>Losses: " + losses + "</p>" +
          //... your guesses left being updated...
          "<p>You have " + guessesLeft + " guesses after this one choice so make it count!</p>" +
          //... and your letters chosen up to this point.
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
// queryselector is to reference the html file and runs these strings with the values inside
document.querySelector("#game").innerHTML = html;
	}