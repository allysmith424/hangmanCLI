var Letter = require("./letters.js")

var Word = function() {

	this.lettersArray = [];

	this.wordDisplayed = "";

	this.wordGuessed = false;

	this.numOfLetters = 0;

	this.lettersGuessed = 0;

	this.guessCount = 12;

	this.addLetter = function(char) {

		var newLetter = new Letter(char);

		this.lettersArray.push(newLetter);

	}

	this.toString = function() {

		this.wordDisplayed = "";

		for (var i = 0; i < this.lettersArray.length; i++) {

			var charDisplayed = this.lettersArray[i].charDisplayed();

			this.wordDisplayed = this.wordDisplayed + charDisplayed;			

		}

		console.log("\n\n" + this.wordDisplayed + "\n\n"); 

	}

	this.calculateLetters = function() {

		this.numOfLetters = this.lettersArray.length;

	}

	this.checkLetters = function(char) {

		for (var i = 0; i < this.lettersArray.length; i++) {

			this.lettersArray[i].checkChar(char);

		}

	}

	this.checkWord = function() {

		this.lettersGuessed = 0;

		for (var i = 0; i < this.lettersArray.length; i++) {

			if (this.lettersArray[i].guessed === true) {

				this.lettersGuessed++;

				if (this.lettersGuessed === this.numOfLetters) {

					this.wordGuessed = true;

				}

			}

		}

	}

}

module.exports = Word;







