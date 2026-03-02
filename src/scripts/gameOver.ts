import { grid } from "./tiles";

export function GameOver() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) return false;
      if (grid[i][j] === grid[i][j + 1] || grid[i][j] === grid[i + 1]?.[j]) {
        return false;
      }
    }
  }
  return true;
}
