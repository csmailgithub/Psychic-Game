// global variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
  "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
// userGuess is set to null, undefined won't work here
var userGuess = null;
// Have computer pick a letter and store it in alphabet
var letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("w " + wins + " l " + losses + " GuessesLeft: " + guessesLeft
 + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToGuess);

// begin indexing user guess's/ keyups
document.onkeyup = function(event) {

	// When user presses a key assigns it to userGuess, took this line from our in class activities
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		//if the user guesses incorrectly;
		//puts user's guess into the array only if it hasn't been pressed during the last 9 guesses
		// i.e. index of 1 from the array bc these are strings the ".indexOf" method is used
		if (guessesSoFar.indexOf(userGuess) < 0 
		&& alphabet.indexOf(userGuess) >= 0) {
			guessesSoFar[guessesSoFar.length]=userGuess;
			// decrease guesses left by 1
			guessesLeft--;
		}

		// if letterToGuess is the userGuess, add 1 to wins
		// reset guessesLeft to 9, 
		// and empty the guessesSoFar and have the computer pick a new letter
		if (letterToGuess == userGuess) {
			wins++;
			alert("You won!");
			guessesLeft = 9;
			guessesSoFar = [];
			letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("w " + wins + " l " + losses + " GuessesLeft: " + guessesLeft
 			+ " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToGuess);

		}

		// if guessesLeft gets to 0 add 1 to losses
		// set guessesLeft back to 9, and empty the guessesSoFar array
		// have computer pick a new letter
		if (guessesLeft == 0) {
			losses++;
			alert("You lost!");
			guessesLeft = 9;
			guessesSoFar = [];
			letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log("w " + wins + " l " + losses + " GuessesLeft: " + guessesLeft
			 + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToGuess);

		}

	// Displaying into to HTML, this part is extra tricky 
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter Im thinking of</h4></p>" +
	 "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " +
	  guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

}