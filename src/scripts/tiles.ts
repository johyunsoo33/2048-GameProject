import { boardSize } from "./boardSize";
export let grid: number[][] = createEmptyGrid();
console.log(grid);

export function createEmptyGrid(): number[][] {
  //Array.from함수로 배열을 만드는데 Array(boardSize)를 통해 하나의 배열을 만든다 그 배열이 boardSize만큼 생성이 된다
  //즉 boardSize 가 4일경우 총 4개의 배열이 생기고 그안에도 인덱스값으로 배열이 생기는 이중 배열이 되는것
  return Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
}

export function SeacrchEmptyGrid(): { row: number; col: number }[] {
  const emptyCells: { row: number; col: number }[] = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      if (grid[row][col] === 0) {
        emptyCells.push({ row, col });
      }
    }
  }
  return emptyCells;
}

export function CreateTiles() {
  const emptyCell = SeacrchEmptyGrid();
  if (emptyCell.length > 0) {
    const { row, col } =
      emptyCell[Math.floor(Math.random() * emptyCell.length)];
    const value = 2;
    grid[row][col] = value;
  }
}

export function TilesInfo(value: number) {
  let numberBox = document.createElement("div");
  let text = document.createTextNode(value.toString());
  numberBox.appendChild(text);
  numberBox.className = "cellBox";
  return numberBox;
}
export function initializeTiles() {
  CreateTiles();
  CreateTiles();
}
