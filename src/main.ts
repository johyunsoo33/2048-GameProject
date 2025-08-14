import { CreateBoard } from "./scripts/board";
import { grid, initializeTiles } from "./scripts/tiles";
import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  initializeTiles();
  CreateBoard(grid);
});
