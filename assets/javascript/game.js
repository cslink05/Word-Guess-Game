var foodWords = ["lasagna",
    "pizza",
    "spaghetti",
    "cannoli",
    "meatball",
    "alfredo",
    "gelato"
];


var totalGuesses = 12;


// var wins = 0;
// var foodWord = "";
// var guessedLetters = [];


// function randomFoodChoice() {
//     foodWord = foodWords[Math.floor(Math.random() * foodWords.length)];
// }

// randomFoodChoice();

// var answerArray = [];
// for (let i = 0; i < foodWord.length; i++) {
//     answerArray[i] = "_";
// }

// var italianFoodWords = document.getElementById("italianFoodWords");

// document.getElementById("italianFoodWords").innerHTML += answerArray.join(" ");

// document.onkeyup = function (event) {

//     if (event.keyCode >= 65 && event.keyCode <= 90) {

//         var userGuess = event.key;

//         for (var j = 0; j < foodWord.length; j++) {
//             if (foodWord[j] === userGuess) {
//                 answerArray[j] = userGuess;
//                 var element = document.getElementById("italianFoodWords");
//                 element.innerHTML = answerArray.join(" ");
//             }
//         }
//     }


// };

const space = "space";

var gameObject = {
    foodWordsList: foodWords,
    correctGuessedLetters: [],
    incorrectGuessedLetters: [],
    currentWord: "",
    wins: 0,
    remainingGuesses: totalGuesses,
    gameOver: true,
    lastWordIndex: -1,

    // reset the game
    resetGame: function () {

        document.getElementById("gameOver").innerHTML = "";

        var index = -1;

        do {
            index = Math.floor(Math.random() * this.foodWordsList.length);
        } while( index === this.lastWordIndex);


        this.currentWord = this.foodWordsList[index];
        this.lastWordIndex = index;

        this.correctGuessedLetters = [];
        this.incorrectGuessedLetters = [];

        this.remainingGuesses = totalGuesses;

        this.gameOver = false;

        var makeWord = this.currentWord.length;
        for (var i = 0; i < makeWord; i++) {

            this.correctGuessedLetters.push("_");
        }

        console.log(this.currentWord);
        this.updatePage();
    },


    // update page html
    updatePage: function () {
        document.getElementById("wins").innerText = this.wins;

        var holdWord = "";
        for (let i = 0; i < this.correctGuessedLetters.length; i++) {
            holdWord += this.correctGuessedLetters[i] + " ";
        }

        document.getElementById("italianFoodWords").innerHTML = holdWord;
        document.getElementById("remainingGuesses").innerText = this.remainingGuesses;
        document.getElementById("guessed").innerText = this.incorrectGuessedLetters;
    },

    // check if guess is correct

    checkGuess: function (letter) {

        var tempPositions = [];

        for (let i = 0; i < this.currentWord.length; i++) {
            if (this.currentWord[i] === letter) {
                tempPositions.push(i);
            }
        }

        if (tempPositions.length <= 0) {
            this.remainingGuesses--;
        } else {
            for (let i = 0; i < tempPositions.length; i++) {
                this.correctGuessedLetters[tempPositions[i]] = letter;
            }
        }
    },


    checkGameOver: function () {
        if (this.correctGuessedLetters.indexOf("_") === -1) {
            this.wins++
            this.gameOver = true;
            // alert("You won! The word was: " + this.currentWord.toUpperCase());
            document.getElementById("gameOver").innerHTML = "<h1>YOU WIN!</h1><br><p>Press any key to play again!</p>";
            return;
        }
        if (this.remainingGuesses <= 0) {
            this.gameOver = true;
            // alert("Sorry you lost. The word was: " + "'" + this.currentWord.toUpperCase() + "'" + " Press any key to try again.");
            document.getElementById("gameOver").innerHTML = "<h1>Sorry you lose...</h1><br><p>Press any key to play again!</p>";
            return;
        }
    },

    makeGuess: function (letter) {
        if (this.remainingGuesses > 0) {
            if (this.incorrectGuessedLetters.indexOf(letter) === -1) {
                this.incorrectGuessedLetters.push(letter);
                this.checkGuess(letter);
            }
        }
        this.checkGameOver();
        this.updatePage();
    }



};



// run game
document.onkeyup = function (event) {
    if (gameObject.gameOver) {
        gameObject.resetGame();
        gameObject.gameOver = false;
    } else {
        gameObject.makeGuess(event.key);
    }
}

console.log(gameObject.currentWord);