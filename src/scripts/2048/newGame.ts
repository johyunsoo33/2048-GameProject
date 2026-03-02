import { CreateBoard } from "./board";
import { grid, initializeTiles, resetGrid } from "./tiles";
import { resetScore } from "./score";

export function newGame() {
  resetGrid();
  initializeTiles();
  CreateBoard(grid);
  resetScore();
}
