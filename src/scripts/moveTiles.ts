import { updateBoard } from "./board";
import { boardSize } from "./boardSize";
import { mergeTiles } from "./mergeTiles";
import { grid, initializeTiles } from "./tiles";
document.addEventListener("keydown", (event) => {
  let moved1 = false,
    merged = false,
    moved2 = false;

  switch (event.key) {
    case "ArrowLeft":
      moved1 = rowTileMoving("left");
      merged = mergeTiles("left");
      moved2 = rowTileMoving("left");
      console.log("왼쪽 타일 처리 완료");
      break;

    case "ArrowRight":
      moved1 = rowTileMoving("right");
      merged = mergeTiles("right");
      moved2 = rowTileMoving("right");
      console.log("오른쪽 타일 처리 완료");
      break;

    case "ArrowUp":
      moved1 = colTileMoving("up");
      merged = mergeTiles("up");
      moved2 = colTileMoving("up");
      console.log("위쪽 타일 처리 완료");
      break;

    case "ArrowDown":
      moved1 = colTileMoving("down");
      merged = mergeTiles("down");
      moved2 = colTileMoving("down");
      console.log("아래쪽 타일 처리 완료");
      break;

    default:
      return; // 다른 키는 무시
  }

  // 변화가 있었을 때만 새 타일 생성 및 업데이트
  if (moved1 || merged || moved2) {
    initializeTiles();
    updateBoard();
  }
});
export function colTileMoving(dir: string) {
  let moved = false;

  if (dir === "up") {
    // 위쪽 화살표: 타일들을 위로 이동
    for (let col = 0; col < boardSize; col++) {
      for (let row = 1; row < boardSize; row++) {
        // 맨 위 행 제외하고 시작
        const current = grid[row][col];
        if (current !== 0) {
          let newRow = row;
          // 위로 이동할 수 있는 만큼 이동
          while (newRow > 0 && grid[newRow - 1][col] === 0) {
            newRow--;
          }
          if (newRow !== row) {
            grid[newRow][col] = current;
            grid[row][col] = 0;
            moved = true;
            console.log(`위로 이동: (${row},${col}) → (${newRow},${col})`);
          }
        }
      }
    }
  } else if (dir === "down") {
    // 아래쪽 화살표: 타일들을 아래로 이동
    for (let col = 0; col < boardSize; col++) {
      for (let row = boardSize - 2; row >= 0; row--) {
        // 맨 아래 행 제외하고 시작
        const current = grid[row][col];
        if (current !== 0) {
          let newRow = row;
          // 아래로 이동할 수 있는 만큼 이동
          while (newRow < boardSize - 1 && grid[newRow + 1][col] === 0) {
            newRow++;
          }
          if (newRow !== row) {
            grid[newRow][col] = current;
            grid[row][col] = 0;
            moved = true;
            console.log(`아래로 이동: (${row},${col}) → (${newRow},${col})`);
          }
        }
      }
    }
  }

  if (moved) {
    updateBoard();
  }

  return moved;
}

export function rowTileMoving(dir: string) {
  let moved = false;
  if (dir === "left") {
    // 왼쪽 화살표: 타일들을 위로 이동
    for (let col = 1; col < boardSize; col++) {
      for (let row = 0; row < boardSize; row++) {
        // 맨 위 행 제외하고 시작
        const current = grid[row][col];
        if (current !== 0) {
          let newCol = col;
          while (newCol > 0 && grid[row][newCol - 1] === 0) {
            newCol--;
          }
          if (newCol !== col) {
            grid[row][newCol] = current;
            grid[row][col] = 0;
            moved = true;
            console.log(`좌로 이동: (${row},${col}) → (${row},${newCol})`);
          }
        }
      }
    }
  } else if (dir === "right") {
    // 오른쪽 화살표: 타일들을 위로 이동
    for (let col = boardSize - 2; col >= 0; col--) {
      for (let row = 0; row < boardSize; row++) {
        // 맨 위 행 제외하고 시작
        const current = grid[row][col];
        if (current !== 0) {
          let newCol = col;
          while (newCol < boardSize - 1 && grid[row][newCol + 1] === 0) {
            newCol++;
          }
          if (newCol !== col) {
            grid[row][newCol] = current;
            grid[row][col] = 0;
            moved = true;
            console.log(`우로 이동: (${row},${col}) → (${row},${newCol})`);
          }
        }
      }
    }
  }
  if (moved) {
    updateBoard();
  }
  return moved;
}
