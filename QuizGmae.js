var readlineSync = require('readline-Sync');
var score = 0;

function welcone() {

    var enterName = readlineSync.question('Enter your name: ');

    console.log('Welcome ' + enterName + ', Do you wanna play a game')
}

var questions = [
    {
        question: 'Where do I live?',
        answer: 'faridabad'
    },
    {
        question: 'Which HERO I like the most?',
        answer: 'iron man'
    }
]

function play(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log('Right');
        score = score + 1;
    } else {
        console.log('Wrong')
    }

    console.log('Current Score = ' + score);
}

function Quiz() {
    for (var i = 0; i < questions.length; i++) {

        play(questions[i].question, questions[i].answer);
    }
}

var highScore = [
    {
        name: 'Bharat',
        score: 2,
    },
    {
        name: 'yash',
        score: 2,
    },
]

function showScore() {
    console.log('YAY!! You SCORED: ' + score);
    console.log("Check out HighScores, If you think you should be there ping me and I'll update it ")

    highScore.map(score => console.log(score.name, ' : ', score.score));
}


welcone();
var wannaPlay = parseInt(readlineSync.question('1 - yes \n2 - no \n'));
console.log(wannaPlay);
if (wannaPlay === 1) {
    Quiz();
    showScore();
} else if (wannaPlay === 2) {
    console.log('Thankyou, GoodBye')
}
