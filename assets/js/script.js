function startGame() {
    var startBtn = document.getElementById("start-game-btn");
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        document.getElementById("gameplay-area").style.display = "block";
        document.getElementById("landing-flag").style.display = "none";
    })
};

const imgFlags = ["algeria.gif", "argentina.gif", "australia.gif", "bahamas.gif", "bangladesh.gif", "belgium.gif"];