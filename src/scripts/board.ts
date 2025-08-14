import { boardSize } from "./boardSize";
import { grid } from "./tiles";

// 2048 메인 보드 생성
const mainBoard = document.getElementById("gameBoard");
export function setUpBoard() {
  mainBoard!.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
  mainBoard!.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;
  mainBoard!.style.gridGap = `1rem`;
}
export function CreateBoard(grid: number[][]) {
  mainBoard!.innerHTML = ""; // 기존 셀들 제거
  mainBoard!.style.display = `grid`;
  setUpBoard();

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      mainBoard!.appendChild(cell);

      const value = grid[row][col];
      if (value !== 0) {
        cell.textContent = value.toString();
        cell.dataset.value = value.toString();
        cell.dataset.row = row.toString();
        cell.dataset.col = col.toString();
      }
    }
  }
}

export function updateBoard() {
  CreateBoard(grid);
}
