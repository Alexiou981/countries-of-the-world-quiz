function startGame() {
    var startBtn = document.getElementById("start-game-btn");
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        document.getElementById("gameplay-area").style.display = "block";
        document.getElementById("landing-flag").style.display = "none";
        document.getElementById("next-flag-btn").style.display = "block";
        document.getElementById("random-flag").style.display = "block";
    })
};
const countryFlag = document.getElementById("random-flag");

const imgFlags = ["assets/images/flags/algeria.gif", "argentina.gif", "australia.gif", "bahamas.gif", "bangladesh.gif", "belgium.gif"];

countryFlag.src = imgFlags[0];