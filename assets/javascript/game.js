var foodWords = ["lasagna",
    "pizza",
    "spaghetti",
    "cannoli",
    "meatball",
    "alfredo",
    "gelato"
];


var wins = 0;
var remainingGuesses = 12;
var foodWord = "";
var guessedLetters = [];


function randomFoodChoice() {
    foodWord = foodWords[Math.floor(Math.random() * foodWords.length)];
}

randomFoodChoice();

var answerArray = [];
for (let i = 0; i < foodWord.length; i++) {
    answerArray[i] = "_";
}

var italianFoodWords = document.getElementById("italianFoodWords");

document.getElementById("italianFoodWords").innerHTML += answerArray.join(" ");

document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var userGuess = event.key;

        for (var j = 0; j < foodWord.length; j++) {
            if (foodWord[j] === userGuess) {
                answerArray[j] = userGuess;
                var element = document.getElementById("italianFoodWords");
                element.innerHTML = answerArray.join(" ");
            }
        }
    }


};

console.log(foodWord);

// var game {

// }