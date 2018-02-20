var Word = require("./word.js");
var inquirer = require("inquirer");

var wordOptions = ["architect", "dangerous", "ordinary", "psychology", "recognize", "collection", "absolute", "auction", "dictate", "bundle", "spontaneous", "overeat", "plot", "curriculum", "appendix", "rotate", "royalty", "structure", "governor", "thoughtful", "respectable", "accurate", "conglomerate", "reluctance", "volunteer", "motorcycle", "redundancy", "opposite"];

var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersGuessed = [];

var usedWords = [];

var currentWord;

var wordLetterArray = [];

var wordObject;

var guessCount = 10;

var lettersGuessedRight = 0;

function chooseWord() {

	currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

	usedWords.push(currentWord);

	wordOptions.splice(wordOptions.indexOf(currentWord), 1);

	wordLetterArray = currentWord.split("");

};

function createWordObject() {

	wordObject = new Word();

	for (var i = 0; i < wordLetterArray.length; i++) {

		wordObject.addLetter(wordLetterArray[i]);

	}

	wordObject.calculateLetters();

}

function takeGuess() {

	if (guessCount === 0) {

		console.log("\n\nI'm afraid you ran out of guesses :(\n\n");
		console.log("For the record... ");

		for (var i = 0; i < wordObject.lettersArray.length; i++) {

			wordObject.lettersArray[i].guessed = true;

		}

		wordObject.toString();

		console.log("... was the word\n\n");

		playAgainQ();

	}

	else {

		wordObject.checkWord();

		if (wordObject.wordGuessed === false) {

			wordObject.toString();

			lettersGuessedRight = wordObject.lettersGuessed;

			console.log("\nGuesses left: " + guessCount + "\n\n");

			inquirer
				.prompt([
					{
					type: "input",
					message: "Guess a letter",
					name: "userGuess"
					}
					]).then(function(result) {

						if (lettersGuessed.indexOf(result.userGuess) === -1) {

							if (possibleLetters.indexOf(result.userGuess) !== -1) {

								wordObject.checkLetters(result.userGuess);

								lettersGuessed.push(result.userGuess);

								wordObject.checkWord();

								if (wordObject.lettersGuessed === lettersGuessedRight) {

									guessCount--;

								}

								takeGuess();

							}

							else {

								console.log("\nPlease guess a letter");

								takeGuess();

							}

						}

						else {

							console.log("\nYou already guessed " + result.userGuess);

							takeGuess();

						}

					});

		}

		else if (wordObject.wordGuessed === true) {

			console.log("\n\nNice work!")

			wordObject.toString();

			console.log("was the word...")
			console.log("\n\nAnd you guessed it correctly!\n");

			playAgainQ();

		}

	}

};

function playAgainQ() {

	inquirer
		.prompt([
			{
			type: "confirm",
			message: "Would you like to play again?",
			name: "playAgain"
			}
			]).then(function(result) {

				if (result.playAgain === true) {

					guessCount = 10;

					lettersGuessed = [];

					chooseWord();

					createWordObject();

					takeGuess();

				}

				else {

					console.log("\n\nOkey dokey --\n\nSee you next time!\n\n")

				}

	});		

}

chooseWord();

createWordObject();

takeGuess();