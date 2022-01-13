var score = 0
var questionNumber = 0
var start = document.querySelector("#button")
var timeLeft = 60
var penalty = 10
var timerCheck = 0
var timer = document.querySelector("#time")
var questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "script",
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
];

start.addEventListener("click", function () {
  if (timerCheck === 0) {
    timerCheck = setInterval(function () {
      timeLeft--;
      timer.textContent = "Time Left: " + timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerCheck);
        timer.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionList);
});