import { CreateBoard } from "./scripts/board";
import { grid, initializeTiles } from "./scripts/tiles";
import "./style.css";
import "./scripts/moveTiles";
import "./scripts/mergeTiles";
import { newGame } from "./scripts/newGame";
document.addEventListener("DOMContentLoaded", () => {
  initializeTiles();
  CreateBoard(grid);
  document.getElementById("newGameBtn")?.addEventListener("click", () => {
    newGame();
  });
});
