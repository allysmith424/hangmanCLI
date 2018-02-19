var Word = require("./word.js");
var inquirer = require("inquirer");

var wordOptions = ["architect", "dangerous", "ordinary", "psychology", "recognize", "collection", "absolute", "auction", "dictate", "bundle", "spontaneous", "overeat", "plot", "curriculum", "appendix", "rotate", "royalty", "structure", "governor", "thoughtful", "respectable", "accurate", "conglomerate", "reluctance", "volunteer", "motorcycle", "redundancy", "opposite"];

var usedWords = [];

var currentWord;

var wordLetterArray = [];

var wordObject;

var guessCount = 10;

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

}

function takeGuess() {

	if (guessCount === 0) {

		console.log("\n\nI'm afraid you ran out of guesses :(\n");

		playAgainQ();

	}

	else {

		wordObject.checkWord();

		if (wordObject.wordGuessed === true) {

			console.log("\n\nNice work! You guessed the word correctly!\n");

			playAgainQ();

		}

		else {

			wordObject.toString();

			console.log("\nGuesses left: " + guessCount + "\n\n");

			inquirer
				.prompt([
					{
					type: "input",
					message: "Guess a letter",
					name: "userGuess"
					}
					]).then(function(result) {

						wordObject.checkLetters(result.userGuess);

						guessCount--;

						takeGuess();

					});

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

					chooseWord();

					createWordObject();

					takeGuess();

				}

				else {

					console.log("\n\nOkey dokey\n\nSee you next time!\n\n")

				}

	});		

}

chooseWord();

createWordObject();

takeGuess();