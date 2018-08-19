var foodWords = ["LASAGNA",
    "PIZZA",
    "SPAGHETTI",
    "CANNOLI",
    "MEATBALL",
    "ALFREDO",
    "GELATO"
];


var wins = 0;
var remainingGuesses = 8;
var testName = "";


function randomFoodChoice() {
    testName = foodWords[Math.floor(Math.random() * foodWords.length)];
}

randomFoodChoice();

var currentWord = document.getElementById("italianFoodWords");

var wordLength = testName.length;
var underscores = "";
function underScoreHtml() {
    for(i=0; i<wordLength; i++) {
        underscores = underscores + "_ "
    }
    document.getElementById("italianFoodWords").innerHTML = underscores;
}

// Display "Press any key to get started"
document.onkeypress = function (event) {

    var userGuess = event.key;




    console.log(userGuess);
    randomFoodChoice();
    console.log(testName);

    document.getElementById("italianFoodWords").innerHTML = "";
    
    underScoreHtml();
};

console.log(testName);
// Track number of times player guessed correctly


//