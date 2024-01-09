const countryFlag = document.getElementById("random-flag")
const optionBtns = document.getElementById("multiple-choices")
const nextBtn = document.getElementById("next-flag-btn")
var userAnswer;

var questionCounter = 1
var correctAnswers = 0
var incorrectAnswers = 0

function startGame() {
  var startBtn = document.getElementById("start-game-btn");
  /* Ensures that the Start Game button dissappears once clicked */
  startBtn.style.display = "none";
  /* Additionally, make those elements show up or dissappear once the button is clicked */
  document.getElementById("gameplay-area").style.display = "block";
  document.getElementById("landing-flag").style.display = "none";
  document.getElementById("next-flag-btn").style.display = "none";
  document.getElementById("random-flag").style.display = "block";
  /*
    Ideas on how to choose random image from an array were taken from this source:
    https://openjavascript.info/2022/12/11/random-image-with-javascript/ 
  */
  randomImg = Math.floor(Math.random() * choices.length);
  countryFlag.src = choices[randomImg].image;

  option1 = document.getElementById("option1")
  option2 = document.getElementById("option2")
  option3 = document.getElementById("option3")
  option4 = document.getElementById("option4")

  optionBtns.innerHTML = `
        <button>${choices[randomImg].answers[0].text}</button>
        <button>${choices[randomImg].answers[1].text}</button>
        <button>${choices[randomImg].answers[2].text}</button>
        <button>${choices[randomImg].answers[3].text}</button>`
  console.log(randomImg);

  console.log(option1.disabled)

};

/* 
   Increments question number diplayed to user when "NEXT" button is clicked. 
*/
function nextQuestion() {
  document.getElementById("next-flag-btn").style.display = "none";
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
    Ideas on how to choose random image from an array were taken from this source:
    https://openjavascript.info/2022/12/11/random-image-with-javascript/ 
  */
  randomImg = Math.floor(Math.random() * choices.length);
  countryFlag.src = choices[randomImg].image;

  optionBtns.innerHTML = `
      <button>${choices[randomImg].answers[0].text}</button>
      <button>${choices[randomImg].answers[1].text}</button>
      <button>${choices[randomImg].answers[2].text}</button>
      <button>${choices[randomImg].answers[3].text}</button>`

  console.log(randomImg)
  console.log(option1.disabled)
}

function selectAnswer() {
  /* Ideas on how to assign the user answer to the most recently clicked button were taken from this tutorial: 
  https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified */
  optionBtns.addEventListener("click", function (opt) {
    userAnswer = opt.target
    console.log("You've picked:", userAnswer.innerText)
  })
}
selectAnswer()

function checkAnswer() {
  optionBtns.addEventListener("click", function () {
    let correctAnswer = choices[randomImg].correct
    console.log("The correct answer is:", correctAnswer)

    if (correctAnswer === userAnswer.innerText) {
      userAnswer.style.backgroundColor = "green"
      incrementCorrectScore()
    } else {
      userAnswer.style.backgroundColor = "red"
      incrementIncorrectScore()
    }

    document.getElementById("next-flag-btn").style.display = "block";

    if (questionCounter === 10) {
      document.getElementById("next-flag-btn").style.display = "none";
      if (correctAnswers > incorrectAnswers) {
        optionBtns.innerHTML = "<h1>You Win!</h1>"
        optionBtns.style.textAlign = "center"
      } else if (correctAnswers === incorrectAnswers) {
        optionBtns.innerHTML = "<h1>It's a draw. <br> No winner this time.</h1>"
        optionBtns.style.textAlign = "center"
      } else {
        optionBtns.innerHTML = "<h1>You Lose!</h1>"
        optionBtns.style.textAlign = "center"
      }
      optionBtns.style.backgroundColor = "slategray"
      document.getElementById("random-flag").style.display = "none";
    }
  })
}
checkAnswer()

function incrementCorrectScore() {
  let previousScore = (document.getElementById("correct-answers").innerText);
  (document.getElementById("correct-answers").innerText) = ++correctAnswers;
}

function incrementIncorrectScore() {
  let previousScore = (document.getElementById("wrong-answers").innerText);
  (document.getElementById("wrong-answers").innerText) = ++incorrectAnswers;
}