var Word = require("./word.js");

var house = new Word();

house.addLetter("h");
house.addLetter("o");
house.addLetter("u");
house.addLetter("s");
house.addLetter("e");

house.toString();

house.checkLetters("e");

house.toString();