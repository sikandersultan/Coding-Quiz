var scoreHigh = document.querySelector("#score")
var erase = document.querySelector("#erase")
var quizPage = document.querySelector("#quiz")

// deletes everything in teh local storage and reloads page to show it did delete cause apparently the page doesnt reload on its own :/
erase.addEventListener("click", function () {
    localStorage.clear()
    location.reload()
})
// gets all the saved scores
var savedScores = localStorage.getItem("savedValues")
savedScores = JSON.parse(savedScores)

if (savedScores !== null) {
    for (var i = 0; i < savedScores.length; i++) {
        var list = document.createElement("li")
        list.textContent = savedScores[i].Name + " " + savedScores[i].Score
        scoreHigh.appendChild(list)
    }
}
// uses the "go back button" to take the person back to the quiz page
quizPage.addEventListener("click", function () {
    window.location.replace("index.html")
})