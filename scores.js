var scoreHigh = document.querySelector("#score")
var erase = document.querySelector("#erase")
var quizPage = document.querySelector("#quiz")


erase.addEventListener("click", function () {
    localStorage.clear()
    location.reload()
})

var savedScores = localStorage.getItem("savedValues")
savedScores = JSON.parse(savedScores)

if (savedScores !== null) {
    for (var i = 0; i < savedScores.length; i++) {
        var list = document.createElement("li")
        list.textContent = savedScores[i].Name + " " + savedScores[i].Score
        scoreHigh.appendChild(list)
    }
}

quizPage.addEventListener("click", function () {
    window.location.replace("index.html")
})