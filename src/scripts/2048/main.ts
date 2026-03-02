import { CreateBoard } from "./scripts/2048/board";
import { grid, initializeTiles } from "./scripts/2048/tiles";
import "./style.css";
import "./scripts/2048/moveTiles";
import "./scripts/2048/mergeTiles";
import { newGame } from "./scripts/2048/newGame";
document.addEventListener("DOMContentLoaded", () => {
  initializeTiles();
  CreateBoard(grid);
  document.getElementById("newGameBtn")?.addEventListener("click", () => {
    newGame();
  });
});
