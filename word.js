var Letter = require("./letters.js")

var Word = function() {

	this.lettersArray = [];

	this.wordDisplayed = "";

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

		console.log("Word displayed: " + this.wordDisplayed); 

	}

	this.checkLetters = function(char) {

		for (var i = 0; i < this.lettersArray.length; i++) {

			this.lettersArray[i].checkChar(char);

		}

	}

}

module.exports = Word;







