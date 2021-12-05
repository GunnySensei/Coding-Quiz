var startBtn = document.querySelector("#start");
var endBtn = document.querySelector("#end");
var nextBtn = document.querySelector("#next");
var scoreCard = document.querySelector("#score");
var timer = document.querySelector("#timer");
var quiz = document.querySelector("#quiz");

//variables declarations
var secondsLeft = 45;
var time = 45;
var countdown = 45;
var quizStatus = false;
var score = 0;
var answerChoices= [];
var trueAnswers = [];
var questionCount = 0;
var currentNumber = 0;
var questions = [
    { 
        number: "question-1",
        question: "What does alert('Hello, World') do?",
        answer: "answer-2",  
        options: [
            "Prints Hello, World to the console.", 
            "Waves at the user.", 
            "Pop up that reads Hello, World.",
            "Sends the user to space." 
        ]
    },
    { 
        number: "question-2",
        question: "What is a <p>?",
        answer: "answer-0",  
        options: [
            "Paragraph element.", 
            "Parachute element.", 
            "Penguin element.",
            "Paradox element." 
        ]
    },
    { 
        number: "question-3",
        question: "How do you symbolize an array?",
        answer: "answer-3",  
        options: [
            "()", 
            "{}", 
            "//",
            "[]" 
        ]
    },
    { 
        number: "question-4",
        question: "How can you change the color of text in css?",
        answer: "answer-2",  
        options: [
            "font.red", 
            "text.color.red", 
            "color.red",
            "let color.be.red" 
        ]
    },
    { 
        number: "question-5",
        question: "a = 2; b = 3; c = a*b; What will console.log(c) show?",
        answer: "answer-1",  
        options: [
            "5", 
            "6", 
            "23",
            "32" 
        ]
    }
];


function startQuiz() {
    time = 45;
    secondsLeft = 45;
    document.getElementById("timer").innerHTML = "Time Left: " + secondsLeft;
    score = 0;
    quizStatus = true;
    endBtn.hidden = false;
    nextBtn.hidden = false;
    timer.hidden = false;
    scoreCard.hidden = false;
    quiz.hidden = false;
    scoreCard.textContent = "Score: " + score;
    console.log("Quiz has Begun, current time is: " + secondsLeft);
    time = setInterval(function(){
        secondsLeft--;
        document.getElementById("timer").innerHTML = "Time Left: " + secondsLeft;
    }, 1000);
    countdown = setTimeout(function(){
        secondsLeft = 0;
        alert("Time is Up");
        endQuiz();
    }, 45000);
    getNextQuestion();
}

function endQuiz() {
    quizStatus = false;
    questionCount = 0;
    currentNumber = 0;

    nextBtn.hidden = true;
    endBtn.hidden = true;

    document.getElementById("timer").hidden = true;
    clearInterval(time);
    clearInterval(countdaown);

    var quizQuestions = document.getElementById("question")
    quizQuestions.remove();

    scoreCard.textContent = "Your Final Score is: " + score;
    var endingMessage = document.createElement("div");
    endingMessage.id = "end-message";
    endingMessage.textContent = "If you would like to play again, click 'Start Quiz!'";
    scoreCard.appendChild(endingMessage);
}

function noMoreQuestionsEnd() {
    quizStatus = false;
    questionCount = 0;
    currentNumber = 0;

    nextBtn.hidden = true;
    endBtn.hidden = true;

    document.getElementById("timer").hidden = true;
    clearInterval(time);
    clearInterval(countdown);

    scoreCard.textContent = "Your Final Score is: " + score;
    var endingMessage = document.createElement("div");
    endingMessage.id = "end-message";
    endingMessage.textContent = "If you would like to play again, click 'Start Quiz!'";
    scoreCard.appendChild(endingMessage);
}

//need to create elements outside of loop and then set values within loop

function getNextQuestion() {
    //variable to show current question within the array
    var currentQuestion = questions[questionCount];
    console.log(currentQuestion);
    //access the quiz section in HTML
    var questionArticle = document.getElementById("quiz");
    //create a section populating from the question portion of the array
    var printQuestionName = document.createElement('section');
    printQuestionName.className = "question";
    printQuestionName.id = "question";
    printQuestionName.textContent = questions[questionCount].question;
    questionArticle.appendChild(printQuestionName);
    //create div for ul
    var printAnswerOptions= document.createElement("div");
    printAnswerOptions.className = "answer";
    printQuestionName.appendChild(printAnswerOptions);
    //create ul for buttons
    var printAnswerButtons = document.createElement("ul");
    printAnswerButtons.id = "buttons";
    printAnswerOptions.appendChild(printAnswerButtons);
    //create li for each answer choice
    for(var i = 0; i < 4; i++) {
        //access the value of the option at hand (both are 4 length constant)
        var buttonList = questions[currentNumber].options[i];
        //create a button with the text showing the value
        printList = document.createElement("button");
        printList.className = "answer-button";
        printList.id = "answer-" + i;
        printList.textContent = buttonList;
        printAnswerButtons.appendChild(printList);
        answerChoices.push(printAnswerButtons);
    }
    answerChoice();
    return answerChoices;
}

var getAnswers = function () {
    for(var i = 0; i < 5; i++) {
        var correctAnswers = questions[i].answer;
        trueAnswers.push(correctAnswers);
    }
    return trueAnswers;
}

var answerChoice = function() {
    console.log(answerChoices);
    //select ID of the answers
    var finalAnswerA = document.querySelector("#answer-0");
    var finalAnswerB = document.querySelector("#answer-1");
    var finalAnswerC = document.querySelector("#answer-2");
    var finalAnswerD = document.querySelector("#answer-3");
    //listen for click on each answer, then run finalAnswer
    finalAnswerA.addEventListener("click", finalAnswer);
    finalAnswerB.addEventListener("click", finalAnswer);
    finalAnswerC.addEventListener("click", finalAnswer);
    finalAnswerD.addEventListener("click", finalAnswer);
}

var finalAnswer = function() {
    var confirmedAnswer = this.id;
    console.log(confirmedAnswer);
    console.log(trueAnswers[questionCount]);
    if(confirmedAnswer === trueAnswers[questionCount]) {
        alert("Correct Answer");
        score = score + 100;
        scoreCard.textContent = "Score : " + score;
    }
    else{
        alert("Wrong Answer");
    }
    
    var el = document.getElementById("question");
    el.remove();
    answerChoices = [];
    questionCount++;
    currentNumber++;
    console.log(currentNumber);
    if(currentNumber === 5) {
        noMoreQuestionsEnd();
    }
    else{  
        getNextQuestion(); 
    }
 
}

getAnswers();
startBtn.addEventListener("click",startQuiz);
endBtn.addEventListener("click", endQuiz);
nextBtn.addEventListener("click", getNextQuestion);
