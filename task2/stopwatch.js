const display = document.querySelector("h1");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerId;

function startTimer() {
  startTime = Date.now();
  timerId = setInterval(updateTime, 10);
}

function stopTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  clearInterval(timerId);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00";
}

function updateTime() {
  elapsedTime = Date.now() - startTime;

  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  display.textContent = formattedTime;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
