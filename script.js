
const questionContainerElement = document.getElementById("question-container");
const questionElement  = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
// answerButtonsElement.addEventListener('click', nextQuestion);
// const correctIncorrectEl = document.getElementById("correct-incorrect-text");
var container1 = document.getElementsByClassName("container1");


var timerEl = document.getElementById("timer-seconds");
var secondsLeft = 15;

// let questionIndex



// this is when user click on the the button to start the game
let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

// this function is used when user clicks on the start button. Once the user click on the button it will hide that start button and then it will show our questions.
function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    questionIndex = 0;
    questionContainerElement.classList.remove("hide");    
    showQuestion();
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
}

// function setNextQuestion() {
//     // questionIndex++;
//     resetState();
//     showQuestion();
// }

function showQuestion() {
    var activeQuestion = questionsList[questionIndex];
    var activeAnswer = activeQuestion.answers;
    questionElement.innerText = activeQuestion.question;

    for (var i=0; i<activeAnswer.length; i++) {
        console.log(activeAnswer[i].text);
        const button = document.createElement("button");
        const listItem = document.createElement("li");
    // }

    // question.answers.foreach(answer => {
    //     const button = document.createElement("button")
        button.innerText = activeAnswer[i].text;
        listItem.appendChild(button);
                button.classList.add("btn")
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    }

    if (activeAnswer === true) {
        correctIncorrectEl = "Correct";
        console.log("Correct");
    } else {
        correctIncorrectEl = "Incorrect";
        console.log("Incorrect");
    }
    }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add("correct")
//     } else {
//         element.classList.add("wrong")
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove("correct")
//     element.classList.remove("wrong")

// }



function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// var questionIndex = 0
let questionsList = [

// const questions = [
    {
    question: "who is Billie Jeans that Michael Jackson was signing about on his hit song 'Billie Jeans?",
    answers: [
        { text: "Levis Jeans", correct: false },
        { text: "Jean Jacket", correct: false },
        { text: "Canadian Tuxedo", correct: false },
        { text: "A girl who claims that he is the one", correct: true },
]
    }
]
