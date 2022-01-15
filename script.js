var score = 0
var questionNumber = 0
var start = document.querySelector("#button")
var timeLeft = 60
var penalty = 10
var timerCheck = 0
var timer = document.querySelector("#time")
var questionsHTML = document.querySelector("#questions")
var questionsAsked = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "<script>",
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["<head>", "<body>", "Both, depending on use", "Neither"],
    answer: "Both, depending on use",
  },
  {
    title: "How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    answer: "alert('Hello World');",
  },
  {
    title: "How do you round the number 7.25, to the nearest integer?",
    choices: ["Math.round(7.25)", "rnd(7.25)", "round(7.25)", "Math.rnd(7.25)"],
    answer: "Math.round(7.25)",
  },
  {
    title: "Which operator is used to assign a value to a variable?",
    choices: ["*", "=", "-", "x"],
    answer: "=",
  },
]
// this listens to the start button and shows the timer thingy
start.addEventListener("click", function () {
  if (timerCheck === 0) {
    timerCheck = setInterval(function () {
      timeLeft--
      timer.textContent = "Time Left: " + timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerCheck);
        timer.textContent = "Time's up!"
      }
    }, 1000)
  }
  // renders all the question into the browser
  render(questionNumber)
})
// creates a list for all the questions in the order they come
var list = document.createElement("ul")
function render(questionNumber) {
  questions.innerHTML = ""
  list.innerHTML = ""
  for (var i = 0; i < questionsAsked.length; i++) {
    var questionShown = questionsAsked[questionNumber].title
    var userChoice = questionsAsked[questionNumber].choices
    questions.textContent = questionShown

  }
  userChoice.forEach(function (chosen) {
    var listItem = document.createElement("li")
    listItem.textContent = chosen
    questions.appendChild(list)
    list.appendChild(listItem)
    listItem.addEventListener("click", answer)
  })
}
// compares the persons answer to the actual right answer
function answer(event) {
  var comaparing = event.target
  if (comaparing.matches("li")) {
    var div = document.createElement("div")
    div.setAttribute("id", "createDiv")
    if (comaparing.textContent == questionsAsked[questionNumber].answer) {
      score++
      div.textContent = "That is right."
    } else {
      timeLeft = timeLeft - penalty
      div.textContent = "THAT IS NOT RIGHT OMGGGG!??"
    }
  }
  questionNumber++

  if (questionNumber >= questionsAsked.length ) {
    newFunction()
    div.textContent = "The end. " + "Your score is: " + timeLeft
  } else {
    render(questionNumber)
  }
  questions.appendChild(div)
}
// takes the information from the user and saves into the local storage
function newFunction() {
  questions.innerHTML = ""
  timer.innerHTML = ""
  var ending = document.createElement("h1")
  ending.setAttribute("id", "ending")
  ending.textContent = "Finisheddddddd!!!!!!!"
  questions.appendChild(ending)
  if (timeLeft >= 0) {
    var totalScore = timeLeft
    var scoreHTML = document.createElement("p")
    clearInterval(timerCheck)
    scoreHTML.textContent = "Your score is: " + totalScore
    questions.appendChild(scoreHTML)
  }
  var createLabel = document.createElement("label")
  createLabel.setAttribute("id", "createLabel")
  createLabel.textContent = "Enter your initials: "
  questions.appendChild(createLabel)
  var createInput = document.createElement("input")
  createInput.setAttribute("type", "text")
  createInput.setAttribute("id", "initials")
  createInput.textContent = ""
  questions.appendChild(createInput);
  var createSubmit = document.createElement("button")
  createSubmit.setAttribute("type", "submit")
  createSubmit.setAttribute("id", "Submit")
  createSubmit.textContent = "Submit"
  questions.appendChild(createSubmit)
  
  createSubmit.addEventListener("click", function () {
    var name = createInput.value
    var savedscore = {
      Name: name,
      Score: timeLeft,
    }
    var savedValues = localStorage.getItem("savedValues")
    if (savedValues === null) {
      savedValues = []
    } else {
      savedValues = JSON.parse(savedValues)
    }
    savedValues.push(savedscore)
    var newScore = JSON.stringify(savedValues)
    localStorage.setItem("savedValues", newScore)
    window.location.replace("scores.html")
  })
  
}