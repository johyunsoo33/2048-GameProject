import { updateBoard } from "./board";
import { boardSize } from "./boardSize";
import { grid } from "./tiles";
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    rowCanMove();
    console.log("왼쪽 타일 검색");
    rowTileMoving("left");
    console.log("왼쪽 타일 이동");
  } else if (event.key === "ArrowRight") {
    rowCanMove();
    console.log("오른쪽 타일 검색");
    rowTileMoving("right");
    console.log("오른쪽 타일 이동");
  } else if (event.key === "ArrowUp") {
    colCanMove();
    console.log("위쪽 타일 검색");
    colTileMoving("up");
    console.log("위쪽 타일 이동");
  } else if (event.key === "ArrowDown") {
    colCanMove();
    console.log("아래쪽 타일 검색");
    colTileMoving("down");
    console.log("아래쪽 타일 이동");
  }
});

export function colCanMove() {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const current = grid[row][col];

      if (current === 0) return true;

      // 상하 비교 (세로 방향) - row를 변경
      if (row < boardSize - 1 && grid[row + 1][col] === current) {
        console.log("같은값 있다 (세로)");
        return true;
      }
      if (row > 0 && grid[row - 1][col] === current) {
        console.log("같은값 있다 (세로)");
        return true;
      }
    }
  }
  return false;
}

export function rowCanMove() {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const current = grid[row][col];

      if (current === 0) return true;

      // 좌우 비교 (가로 방향) - col을 변경
      if (col < boardSize - 1 && grid[row][col + 1] === current) {
        console.log("같은값 있다 (가로)");
        return true;
      }
      if (col > 0 && grid[row][col - 1] === current) {
        console.log("같은값 있다 (가로)");
        return true;
      }
    }
  }
  return false;
}
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
