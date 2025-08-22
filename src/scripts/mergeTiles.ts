import { boardSize } from "./boardSize";
import { grid } from "./tiles";

export function mergeTiles(dir: string) {
  if (dir === "up") {
    // 위쪽 화살표: 같은 수의 타일을 상단 방향으로 병합
    for (let col = 0; col < boardSize; col++) {
      for (let row = 1; row < boardSize; row++) {
        // 맨 위 행 제외하고 시작
        const current = grid[row][col];

        if (current !== 0 && grid[row - 1][col] === current) {
          grid[row - 1][col] = current * 2;
          grid[row][col] = 0;
        }
      }
    }
  } else if (dir === "down") {
    // 아래쪽 화살표: 같은 수의 타일을 하단 방향으로 병합
    for (let col = 0; col < boardSize; col++) {
      for (let row = boardSize - 2; row >= 0; row--) {
        // 맨 아래 행 제외하고 시작
        const current = grid[row][col];
        if (current !== 0 && grid[row + 1][col] === current) {
          grid[row + 1][col] = current * 2;
          grid[row][col] = 0;
        }
      }
    }
  }
  if (dir === "left") {
    // 왼쪽 화살표: 같은 수의 타일을 왼쪽 방향으로 병합
    for (let col = 1; col < boardSize; col++) {
      for (let row = 0; row < boardSize; row++) {
        // 맨 위 행 제외하고 시작
        const current = grid[row][col];
        if (current !== 0 && grid[row][col - 1] === current) {
          grid[row][col - 1] = current * 2;
          grid[row][col] = 0;
        }
      }
    }
  } else if (dir === "right") {
    // 오른쪽 화살표: 같은 수의 타일을 오른쪽 방향으로 병합
    for (let col = boardSize - 2; col >= 0; col--) {
      for (let row = 0; row < boardSize; row++) {
        // 맨 위 행 제외하고 시작
        const current = grid[row][col];
        if (current !== 0 && grid[row][col + 1] === current) {
          grid[row][col + 1] = current * 2;
          grid[row][col] = 0;
        }
      }
    }
  }
}
