

const countryFlag = document.getElementById("random-flag");
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
        const randomImg = Math.floor(Math.random() * choices.length);
        countryFlag.src = choices[randomImg].image;

        /*
          Ideas on how to ensure the image doesn't get picked 
          twice were taken from this source: 
          https://www.w3schools.com/jsref/jsref_splice.asp
         */
        choices.splice(randomImg, 1);
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
    const randomImg = Math.floor(Math.random() * choices.length);
    countryFlag.src = choices[randomImg].image;

    /*
      Ideas on how to ensure the image doesn't get picked 
      twice were taken from this source: 
      https://www.w3schools.com/jsref/jsref_splice.asp
    */
    choices.splice(randomImg, 1);
    console.log(randomImg);
}


