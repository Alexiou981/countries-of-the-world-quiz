function startGame() {
    var startBtn = document.getElementById("start-game-btn");
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        document.getElementById("gameplay-area").style.display = "block";
        document.getElementById("landing-flag").style.display = "none";
        document.getElementById("next-flag-btn").style.display = "block";
    })
};

const imgFlags = ["algeria.gif", "argentina.gif", "australia.gif", "bahamas.gif", "bangladesh.gif", "belgium.gif"];