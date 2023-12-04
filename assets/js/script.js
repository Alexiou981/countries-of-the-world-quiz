function showChoices() {
    var startBtn = document.getElementById("gameplay-area");
    startBtn.addEventListener('click', () => {
        startBtn.style.display = "none";
    })
    if (startBtn.style.display === "none") {
      startBtn.style.display = "block";
    } else {
      startBtn.style.display = "none";
    }
} 


  
