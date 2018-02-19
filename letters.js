var Letter = function(letter) {

	this.letter = letter,
	this.guessed = false,
	this.charDisplayed = function() {

		if (this.guessed === true) {

			return this.letter;

		}

		else {

			return "_";

		}

	}
	this.checkChar = function(char) {

		if (char === this.letter) {

			this.guessed = true;

			console.log("\nCorrect!\n");

		}

	} 

}

module.exports = Letter;

