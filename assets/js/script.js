

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
        /* Ensures that the Start Game button dissappears once clicked */
        startBtn.style.display = "none";

        /* Additionally, make those elements show up or dissappear once the button is clicked */
        document.getElementById("gameplay-area").style.display = "block";
        document.getElementById("landing-flag").style.display = "none";
        document.getElementById("next-flag-btn").style.display = "block";
        document.getElementById("random-flag").style.display = "block";


        /*
          Ideas on how to create a function that will choose 
          random image from an array were taken from this source:
          https://openjavascript.info/2022/12/11/random-image-with-javascript/ 
        */
        const randomImg = Math.floor(Math.random() * imgFlags.length);
        countryFlag.src = imgFlags[randomImg];

        /*
          Ideas on how to ensure the image doesn't get picked 
          twice were taken from this source: 
          https://www.w3schools.com/jsref/jsref_splice.asp
         */
        imgFlags.splice(randomImg, 1);
        console.log(randomImg);
    
};

/* 
  This function increments the number of the question every time
  the user clicks next and ensures that the next button dissapears 
  when the number reaches to number 10 which is the final question. 
*/
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
    /*
      Ideas on how to create a function that will choose 
      a random image from an array were taken from this source:
      https://openjavascript.info/2022/12/11/random-image-with-javascript/ 
    */
    const randomImg = Math.floor(Math.random() * imgFlags.length);
    countryFlag.src = imgFlags[randomImg];

    /*
      Ideas on how to ensure the image doesn't get picked 
      twice were taken from this source: 
      https://www.w3schools.com/jsref/jsref_splice.asp
    */
    imgFlags.splice(randomImg, 1);
    console.log(randomImg);
}


