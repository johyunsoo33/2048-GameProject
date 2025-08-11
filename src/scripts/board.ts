// 2048 메인 보드 생성
const mainBoard = document.getElementById("gameBoard");
export function setUpBoard() {
  mainBoard!.style.gridTemplateColumns = `repeat(4, 1fr)`;
  mainBoard!.style.gridTemplateRows = `repeat(4, 1fr)`;
  mainBoard!.style.gridGap = `1rem`;
}
export function CreateBoard() {
  mainBoard!.style.display = `grid`;
  setUpBoard();

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.border = `0.0625rem solid  red`;
      cell.style.borderRadius = `0.625rem`;
      cell.style.padding = `0.625rem`;
      let numberBox = document.createElement("div");
      let text = document.createTextNode(Math.pow(2, row + col + 1).toString());
      numberBox.appendChild(text);
      numberBox.style.textAlign = "center";
      cell.appendChild(numberBox);
      mainBoard!.appendChild(cell);
    }
  }
}

export function updateBoard() {
  CreateBoard();
}
