import { createHotSpot } from "./createHotSpot";
import { RoomTextChange } from "./RoomTextChange";

export function createRoom1() {
  const bgImage = document.querySelector(".RoomBgImage") as HTMLImageElement;
  bgImage.src = "/room1.png";

  createHotSpot(30, 50, 10, 15, () => {
    RoomTextChange("서랍 안에서 열쇠가 발견됐다!");
  });
}
