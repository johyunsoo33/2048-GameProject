import provisoData from "../../data/RoomEscapeText/proviso.json";

type ClueKey = keyof typeof provisoData;

const collectedClues: ClueKey[] = [];
let currentPage = 0;

function updateArrows() {
  const leftArrow = document.getElementsByClassName(
    "left_Arrow",
  )[0] as HTMLElement;
  const rightArrow = document.getElementsByClassName(
    "right_Arrow",
  )[0] as HTMLElement;
  const maxPage = Math.floor((collectedClues.length - 1) / 2);

  if (leftArrow) {
    const disabled = currentPage <= 0;
    leftArrow.style.opacity = disabled ? "0.3" : "1";
    leftArrow.style.pointerEvents = disabled ? "none" : "auto";
  }
  if (rightArrow) {
    const disabled = currentPage >= maxPage || collectedClues.length === 0;
    rightArrow.style.opacity = disabled ? "0.3" : "1";
    rightArrow.style.pointerEvents = disabled ? "none" : "auto";
  }
}

function renderPage() {
  const leftEl = document.getElementsByClassName(
    "left_content",
  )[0] as HTMLElement;
  const rightEl = document.getElementsByClassName(
    "right_content",
  )[0] as HTMLElement;

  const leftIndex = currentPage * 2;
  const rightIndex = currentPage * 2 + 1;

  leftEl.textContent = collectedClues[leftIndex]
    ? provisoData[collectedClues[leftIndex]][0].proviso
    : "";
  rightEl.textContent = collectedClues[rightIndex]
    ? provisoData[collectedClues[rightIndex]][0].proviso
    : "";

  updateArrows();
}

export function createProviso(clueKey: ClueKey) {
  if (!collectedClues.includes(clueKey)) {
    collectedClues.push(clueKey);
    renderPage();
  }
}

export function resetCurrentPage() {
  currentPage = 0;
}

export function initProviso() {
  const leftArrow = document.getElementsByClassName("left_Arrow")[0];
  const rightArrow = document.getElementsByClassName("right_Arrow")[0];

  updateArrows();

  leftArrow?.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  });

  rightArrow?.addEventListener("click", () => {
    const maxPage = Math.floor((collectedClues.length - 1) / 2);
    if (currentPage < maxPage) {
      currentPage++;
      renderPage();
    }
  });
}
