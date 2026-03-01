import { boardSize } from "./boardSize";
import { grid } from "./tiles";

export function GameClear() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (grid[i][j] === 2048) {
        window.alert("게임 클리어");
        return true;
      }
    }
  }
}
