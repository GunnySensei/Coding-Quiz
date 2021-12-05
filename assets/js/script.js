var startBtn = document.querySelector("#start");
var endBtn = document.querySelector("#end");
var nextBtn = document.querySelector("#next");
var answerBtn = document.querySelector(".answer-button");
var secondsLeft = 45;
var time = 45;
var quizStatus = false;
var questionCount = -1;
var questions = [
    { 
        number: "question-1",
        question: "Question #1",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: "question-2",
        question: "Question #2",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: "question-3",
        question: "Question #3",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: "question-4",
        question: "Question #4",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: "question-5",
        question: "Question #5",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    }
];

function startQuiz() {
    quizStatus = true;
    console.log("Quiz has Begun, current time is: " + secondsLeft);
    if(quizStatus) {
            time = setInterval(function(){
                secondsLeft--;
                document.getElementById("timer").innerHTML = "Time Left: " + secondsLeft;
            }, 1000);
            time = setTimeout(function(){
                secondsLeft = 0;
                alert("Time is Up");
                endQuiz();
            }, 45000);
    }
}

function endQuiz() {
    quizStatus = false;
    console.log("Quiz is ended");
    time = setInterval(function(){
        document.getElementById("timer").innerHTML = "Time Left: 0";
    }, 0000);
}

//need to create elements outside of loop and then set values within loop

function getNextQuestion() {
    // adds 1 to questionCount to change the [i]
    questionCount++;
    //variable to show current question within the array
    var currentQuestion = questions[questionCount];
    console.log(currentQuestion);
    //access the quiz section in HTML
    var questionArticle = document.getElementById("quiz");
    //create a section populating from the question portion of the array
    var printQuestionName = document.createElement('section');
    printQuestionName.className = "question";
    printQuestionName.textContent = questions[questionCount].question;
    questionArticle.appendChild(printQuestionName);
    //create div for ul
    var printAnswerOptions= document.createElement("div");
    printAnswerOptions.className = "answer";
    printQuestionName.appendChild(printAnswerOptions);
    //create ul for buttons
    var printAnswerButtons = document.createElement("ul");
    printAnswerOptions.appendChild(printAnswerButtons);
    //create li for each answer choice
    for(var i = 0; i < 4; i++) {
        //access the value of the option at hand (both are 4 length constant)
        var buttonList = questions[i].options[i];
        //create a button with the text showing the value
        printList = document.createElement("button");
        printList.className = "answer-button";
        printList.id = "answer-" + i;
        printList.textContent = buttonList;
        printAnswerButtons.appendChild(printList);
    }
}

function answerChoice() {
    console.log(printList.id);
}


startBtn.addEventListener("click",startQuiz);
endBtn.addEventListener("click", endQuiz);
nextBtn.addEventListener("click", getNextQuestion);
answerBtn.addEventListener("click", answerChoice);