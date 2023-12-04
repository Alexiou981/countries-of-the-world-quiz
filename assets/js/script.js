function hideBtn() {
    var startBtn = document.getElementById("start-game-btn");
    startBtn.addEventListener("click", () => {
        startBtn.style.display="none";
    })
};