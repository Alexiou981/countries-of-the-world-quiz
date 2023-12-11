

const countryFlag = document.getElementById("random-flag");

const imgFlags = [];

imgFlags.push("assets/images/flags/algeria.png");
imgFlags.push("assets/images/flags/argentina.png");
imgFlags.push("assets/images/flags/australia.png");
imgFlags.push("assets/images/flags/bahamas.png");
imgFlags.push("assets/images/flags/bangadesh.png");
imgFlags.push("assets/images/flags/belgium.png");
imgFlags.push("assets/images/flags/belize.png");
imgFlags.push("assets/images/flags/bolivia.png");
imgFlags.push("assets/images/flags/brazil.png");
imgFlags.push("assets/images/flags/bulgaria.png");
imgFlags.push("assets/images/flags/cambodia.png");
imgFlags.push("assets/images/flags/cameroon.png");
imgFlags.push("assets/images/flags/chile.png");
imgFlags.push("assets/images/flags/colombia.png");
imgFlags.push("assets/images/flags/costa-rica.png");
imgFlags.push("assets/images/flags/cuba.png");
imgFlags.push("assets/images/flags/finland.png");
imgFlags.push("assets/images/flags/germany.png");
imgFlags.push("assets/images/flags/greece.png");
imgFlags.push("assets/images/flags/india.png");

console.log(imgFlags);

questionCounter = 1;

function startGame() {
    var startBtn = document.getElementById("start-game-btn");
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        document.getElementById("gameplay-area").style.display = "block";
        document.getElementById("landing-flag").style.display = "none";
        document.getElementById("next-flag-btn").style.display = "block";
        document.getElementById("random-flag").style.display = "block";

        const randomImg = Math.floor(Math.random() * imgFlags.length);
        countryFlag.src = imgFlags[randomImg];
        console.log(randomImg);
    })
};

function nextQuestion() {
    chooseFlag() 
    questionCounter++;
    if (questionCounter < 10) {
        updateDisplay();
    } else {
        updateDisplay();
        document.getElementById("next-flag-btn").style.display = "none";
    }
};

function updateDisplay() {
    document.getElementById("question-counter").innerHTML = questionCounter;
}

function chooseFlag() {
    const randomImg = Math.floor(Math.random() * imgFlags.length);
    countryFlag.src = imgFlags[randomImg];
    console.log(randomImg);
}


