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

const imgFlags = ["assets/images/flags/algeria.gif", "assets/images/flags/argentina.gif", "assets/images/flags/australia.gif", "assets/images/flags/bahamas.gif", "assets/images/flags/bangladesh.gif", "assets/images/flags/belgium.gif"];

countryFlag.src = imgFlags[1];