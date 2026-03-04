import { createRoom1 } from "./room1";
import { currentStage, setCurrentStage } from "./gameState";
import { createRoom2 } from "./room2";

const roomCreators: Record<number, () => void> = {
  1: createRoom1,
  2: createRoom2,
};

export function PrevStageIcon() {
  const prevStageIcon = document.getElementsByClassName(
    "prevStaveBtn",
  )[0] as HTMLElement;

  prevStageIcon.addEventListener("click", () => {
    PrevStageMove();
  });
}

export function PrevStageMove() {
  if (currentStage <= 1) return;

  document.querySelectorAll(".HotSpot").forEach((el) => el.remove());

  const prevStage = currentStage - 1;
  setCurrentStage(prevStage);

  roomCreators[prevStage]?.();
}
