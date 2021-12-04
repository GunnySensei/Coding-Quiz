var startBtn = document.querySelector("#start");
var endBtn = document.querySelector("#end");
var nextBtn = document.querySelector("#next");
var secondsLeft = 45;
var time = 45;
var quizStatus = false;
var questionCount = -1;
var questions = [
    { 
        number: 1,
        question: "#1",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: 2,
        question: "#2",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: 3,
        question: "#3",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: 4,
        question: "#4",
        answer: "a",  
        options: [
            "a", 
            "b", 
            "c",
            "d" 
        ]
    },
    { 
        number: 5,
        question: "#5",
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

function getNextQuestion() {
    questionCount++;
    var currentQuestion = questions[questionCount];
    console.log(currentQuestion);
}


startBtn.addEventListener("click",startQuiz);
endBtn.addEventListener("click", endQuiz)
nextBtn.addEventListener("click", getNextQuestion);