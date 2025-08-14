import { CreateBoard } from "./scripts/board";
import { grid, initializeTiles } from "./scripts/tiles";
import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  initializeTiles(); // 타일 2개 생성
  CreateBoard(grid); // 생성된 그리드로 보드 만들기
});
