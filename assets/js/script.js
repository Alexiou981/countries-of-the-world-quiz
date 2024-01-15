// Assign variables and get elements from the DOM
// Hides rematch button and exit message and button

let countryFlag = document.getElementById("random-flag");
const optionBtns = document.getElementById("multiple-choices");
const rematchBtn = document.getElementById("rematch");
const result = document.getElementById("result");
const exitMsg = document.getElementById("exit-message");
const exitBtn = document.getElementById("exit");
var userAnswer;
var questionCounter = 1;
var correctAnswers = 0;
var incorrectAnswers = 0;
exitMsg.style.display = "none";
rematchBtn.style.display = "none";
exitBtn.style.display = "none";

/**
 * The startGame function hides all elements of the landing page
 * and loads the elements of the gameplay area.
 * Gets the option1-4 elements and replaces inner HTML with relevant text 
 * of image randomly selected.
 */
function startGame() {
  var startBtn = document.getElementById("start-game-btn");
  startBtn.style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("random-flag").style.display = "block";
  document.getElementById("gameplay-area").style.display = "block";
  document.getElementById("landing-flag").style.display = "none";
  document.getElementById("next-flag-btn").style.display = "none";
  
  /*
    Ideas on how to choose random image from an array were taken from this source:
    https://openjavascript.info/2022/12/11/random-image-with-javascript/ 
  */
  randomImg = Math.floor(Math.random() * choices.length);
  countryFlag.src = choices[randomImg].image;

  option1 = document.getElementById("option1");
  option2 = document.getElementById("option2");
  option3 = document.getElementById("option3");
  option4 = document.getElementById("option4");
  option1.innerHTML = choices[randomImg].answers[0].text;
  option2.innerHTML = choices[randomImg].answers[1].text;
  option3.innerHTML = choices[randomImg].answers[2].text;
  option4.innerHTML = choices[randomImg].answers[3].text;

  whiteOptionBtns();
}

/** 
   This function is available to the user upon choosing one of the options,
   it proceeds to the next flag question and increments the quedtion counter. 
*/
function nextQuestion() {
  document.getElementById("next-flag-btn").style.display = "none";
  document.getElementById("question").style.display = "block";
  chooseFlag();
  enableOptionBtns();
  whiteOptionBtns();
  questionCounter++;
  if (questionCounter < 10) {
    updateDisplay();
  } else {
    updateDisplay();
    document.getElementById("next-flag-btn").style.display = "none";
  }
}

/**
 * Updates the number of currect question out of ten
 */
function updateDisplay() {
  document.getElementById("question-counter").innerHTML = questionCounter;
}

/**
 * This function randomly picks a flag out of the choices array
 * and replaces the inner HTML of options 1-4 with relevant text 
 * to flag picked.
 */
function chooseFlag() {
  /*
    Ideas on how to choose random image from an array were taken from this source:
    https://openjavascript.info/2022/12/11/random-image-with-javascript/ 
  */
  randomImg = Math.floor(Math.random() * choices.length);
  countryFlag.src = choices[randomImg].image;

  option1.innerHTML = choices[randomImg].answers[0].text;
  option2.innerHTML = choices[randomImg].answers[1].text;
  option3.innerHTML = choices[randomImg].answers[2].text;
  option4.innerHTML = choices[randomImg].answers[3].text;
}

/**
 * This function is called when the user selects an answer
 * and assigns it to the userAnswer variable. It disables buttons
 * upon user selection to avoid more than a single answer to each flag.
 */
function selectAnswer() {
  /* 
  Ideas on how to assign the user answer to the most recently clicked
  button were taken from this tutorial: 
  https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified 
  */
  optionBtns.addEventListener("click", function (opt) {
    userAnswer = opt.target;
  });
  const disableOptionBnts = () => {
    option1.disabled = true,
    option2.disabled = true,
    option3.disabled = true,
    option4.disabled = true;
  };
  optionBtns.addEventListener("click", disableOptionBnts);
}


selectAnswer();

/**
 * Checks the answer selected by the user 
 * and outputs whether correct or not.
 */
function checkAnswer() {
  optionBtns.addEventListener("click", function () {
    let correctAnswer = choices[randomImg].correct;
    if (correctAnswer === userAnswer.innerText) {
      userAnswer.style.backgroundColor = "green";
      incrementCorrectScore();
    } else {
      userAnswer.style.backgroundColor = "red";
      incrementIncorrectScore();
    }
    // Removes selected image from choices array
    choices.splice(randomImg, 1);
    document.getElementById("next-flag-btn").style.display = "block";
    document.getElementById("question").style.display = "none";
    // Show final result depending on the amount of correct/incorrect answers
    if (questionCounter === 10) {
      document.getElementById("next-flag-btn").style.display = "none";
      if (correctAnswers > incorrectAnswers) {
        result.innerHTML = "<h1>You Win!</h1>";
        result.style.textAlign = "center";
      } else if (correctAnswers === incorrectAnswers) {
        result.innerHTML = "<h1>It's a draw. <br> No winner this time.</h1>";
        result.style.textAlign = "center";
      } else {
        result.innerHTML = "<h1>You Lose!</h1>";
        result.style.textAlign = "center";
      }
      // Hides elements after answering the last flag question
      document.getElementById("random-flag").style.display = "none";
      document.getElementById("question").style.display = "none";
      document.getElementById("counter-area").style.display = "none";
      optionBtns.style.display = "none";
      rematchBtn.style.display = "block";
      exitBtn.style.display = "block";
      /* Ideas on how to remove an element from DOM were raken from:
      https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
      */
      // Removes element from DOM before announcing final result
      document.getElementById("flag-container").remove();
    }
  });
}
checkAnswer();

/**
 * Increments correct score
 */
function incrementCorrectScore() {
  (document.getElementById("correct-answers").innerText) = ++correctAnswers;
}

/**
 * Increments incorrect score
 */
function incrementIncorrectScore() {
  (document.getElementById("wrong-answers").innerText) = ++incorrectAnswers;
}

/**
 * Enables option buttons when the Next button is clicked
 */
function enableOptionBtns() {
  option1.disabled = false,
  option2.disabled = false,
  option3.disabled = false,
  option4.disabled = false;
}

/**
 * Sets backgroung color of option buttons to white
 */
function whiteOptionBtns() {
  option1.style.backgroundColor = "white",
  option2.style.backgroundColor = "white",
  option3.style.backgroundColor = "white",
  option4.style.backgroundColor = "white";
}

/**
 * Restarts the game and takes the user to landing page
 */
function restart() {
  /*
  This code was taken from here:
  https://www.w3schools.com/jsref/met_loc_reload.asp
  */

  window.location.reload();
}

/**
 * Hides elements of gameplay area and shows thank you message
 */
function exit() {
  document.getElementById("footer").style.display = "flex";
  exitMsg.style.display = "block";
  document.getElementById("heading").style.display = "block";
  document.getElementById("question").style.display = "none";
  document.getElementById("rematch").style.display = "none";
  document.getElementById("exit").style.display = "none";
  document.getElementById("main-game-area").style.display = "none";
  document.getElementById("counter-area").style.display = "none";
  document.getElementById("player-score-area").style.display = "none";
}