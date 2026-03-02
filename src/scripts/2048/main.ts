import { CreateBoard } from "./board";
import { grid, initializeTiles } from "./tiles";
import "./style.css";
import "./moveTiles";
import "./mergeTiles";
import { newGame } from "./newGame";
document.addEventListener("DOMContentLoaded", () => {
  initializeTiles();
  CreateBoard(grid);
  document.getElementById("newGameBtn")?.addEventListener("click", () => {
    newGame();
  });
});
