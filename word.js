var Letter = require("./letters.js")

var Word = function() {

	this.lettersArray = [];

	this.wordDisplayed = "";

	this.wordGuessed = false;

	this.numOfLetters = this.lettersArray.length;

	this.lettersGuessed = 0;

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

	this.checkLetters = function(char) {

		for (var i = 0; i < this.lettersArray.length; i++) {

			this.lettersArray[i].checkChar(char);

		}

	}

	this.checkWord = function() {

		for (var i = 0; i < this.lettersArray.length; i++) {

			if (this.lettersArray[i].guessed === false) {

				return;

			}

			else {

				this.lettersGuessed++;

				if (this.lettersGuessed === this.numOfLetters) {

					this.wordGuessed = true;

				}

			}

		}

	}

}

module.exports = Word;







