const board = document.getElementById("game-board");
const message = document.getElementById("message");
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");
let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (cells[index].textContent || !gameActive) {
    return;
  }
  cells[index].textContent = currentPlayer;
  let x = currentPlayer;
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  checkWinner(x);
}

function checkWinner(x) {
  for (let combination of winningCombinations) {
    if (
      cells[combination[0]].textContent === cells[combination[1]].textContent &&
      cells[combination[1]].textContent === cells[combination[2]].textContent &&
      cells[combination[0]].textContent !== ""
    ) {
      message.textContent = `Player ${x} wins!`;
      gameActive = false;
      return;
    }
  }
  if (!Array.from(cells).some((cell) => cell.textContent === "")) {
    message.textContent = "It's a tie!";
    gameActive = false;
  }
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  cells.forEach((cell) => (cell.textContent = ""));
  message.textContent = "";
}
