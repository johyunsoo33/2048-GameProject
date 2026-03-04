import { createRoom2 } from "./room2";

export function NextStage() {
  const charaterText = document.getElementsByClassName(
    "CharaterText",
  )[0] as HTMLElement;
  charaterText.style.display = "none";

  document.querySelectorAll(".HotSpot").forEach((el) => el.remove());

  createRoom2();
}
