import { createHotSpot } from "./createHotSpot";
import { createItem } from "./createItem";
import {
  areAllCluesCollected,
  createProviso,
  isClueCollected,
} from "./proviso";
import { RoomTextChange } from "./RoomTextChange";
import itemData from "../../data/RoomEscapeText/item.json";
import provisoData from "../../data/RoomEscapeText/proviso.json";
import { NextStage } from "./NextStage";

export function createRoom2() {
  const roomBgImage = document.getElementsByClassName(
    "RoomBgImage",
  )[0] as HTMLImageElement;
  roomBgImage.src = "/room2.png";

  const pictureSource = document.querySelector(
    "picture source",
  ) as HTMLSourceElement;
  if (pictureSource) {
    pictureSource.srcset = "/room2-mobile.png";
  }

  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    createHotSpot(20, 60, 20, 18, () => {
      if (isClueCollected("4번 단서")) {
        RoomTextChange(provisoData["4번 단서"][0].text_repeat);
        return;
      }
      RoomTextChange(provisoData["4번 단서"][0].text_first);
      createProviso("4번 단서");
      createItem(itemData["4번 증거"][0].item);
    });
    createHotSpot(53, 78, 10, 18, () => {
      if (isClueCollected("5번 단서")) {
        RoomTextChange(provisoData["5번 단서"][0].text_repeat);
        return;
      }
      RoomTextChange(provisoData["5번 단서"][0].text_first);
      createProviso("5번 단서");
      createItem(itemData["5번 증거"][0].item);
    });
    createHotSpot(63, 25, 10, 48, () => {
      if (isClueCollected("6번 단서")) {
        RoomTextChange(provisoData["6번 단서"][0].text_repeat);
        return;
      }
      RoomTextChange(provisoData["6번 단서"][0].text_first);
      createProviso("6번 단서");
      createItem(itemData["6번 증거"][0].item);
    });
    createHotSpot(11, 45, 10, 48, () => {
      if (!areAllCluesCollected(["6번 단서"])) {
        RoomTextChange(provisoData["수술실 안쪽 문"][0].text_fail);
        return;
      }
      RoomTextChange(provisoData["수술실 안쪽 문"][0].text_success);
    });
  }
}
