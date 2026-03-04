import { createRoom2 } from "./room2";
import { setCurrentStage } from "./gameState";

export function NextStage() {
  const charaterText = document.getElementsByClassName(
    "CharaterText",
  )[0] as HTMLElement;
  charaterText.style.display = "none";

  document.querySelectorAll(".HotSpot").forEach((el) => el.remove());

  setCurrentStage(2);
  createRoom2();
}
