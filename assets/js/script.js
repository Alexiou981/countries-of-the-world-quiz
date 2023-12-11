

const countryFlag = document.getElementById("random-flag");

const imgFlags = ["assets/images/flags/algeria.png", "assets/images/flags/argentina.png", "assets/images/flags/australia.png", "assets/images/flags/bahamas.png", "assets/images/flags/bangadesh.png", "assets/images/flags/belgium.png"];

questionCounter = 1;

function startGame() {
    var startBtn = document.getElementById("start-game-btn");
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        document.getElementById("gameplay-area").style.display = "block";
        document.getElementById("landing-flag").style.display = "none";
        document.getElementById("next-flag-btn").style.display = "block";
        document.getElementById("random-flag").style.display = "block";

        const randomImage = Math.floor(Math.random() * imgFlags.length);
        countryFlag.src = imgFlags[randomImage];
        localStorage.setItem('flag', randomImage);
    })
};

function nextCountryFlag() {
    updateDisplay(questionCounter++);

    var nextBtn = document.getElementById("next-flag-btn");
    nextBtn.addEventListener("click", () => {

        randomFlagPicker();

        function randomFlagPicker() {

            const nextRandomImage = Math.floor(Math.random() * imgFlags.length);

            if (nextRandomImage !== Number(localStorage.getItem("flag"))) {

                countryFlag.src = imgFlags[nextRandomImage];

                localStorage.setItem("flag", nextRandomImage);

            } else {
                randomFlagPicker();
            }
        }
    })
};

function updateDisplay() {
    document.getElementById("question-counter").innerHTML = questionCounter;
}

console.log(questionCounter);

