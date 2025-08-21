import { CreateBoard } from "./scripts/board";
import { grid, initializeTiles } from "./scripts/tiles";
import "./style.css";
import "./scripts/moveTiles";
document.addEventListener("DOMContentLoaded", () => {
  initializeTiles();
  CreateBoard(grid);
});
