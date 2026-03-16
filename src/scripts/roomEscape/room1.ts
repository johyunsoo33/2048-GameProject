import { createHotSpot } from "./createHotSpot";
import { createItem } from "./createItem";
import { NextStage } from "./NextStage";
import {
  createProviso,
  areAllCluesCollected,
  isClueCollected,
} from "./proviso";
import { RoomTextChange } from "./RoomTextChange";
import itemData from "../../data/RoomEscapeText/item.json";
import provisoData from "../../data/RoomEscapeText/proviso.json";

export function createRoom1() {
  const roomBgImage = document.getElementsByClassName(
    "RoomBgImage",
  )[0] as HTMLImageElement;
  roomBgImage.src = "/room1.png";

  const pictureSource = document.querySelector(
    "picture source",
  ) as HTMLSourceElement;
  if (pictureSource) {
    pictureSource.srcset = "/room1-mobile.png";
  }

  const isMobile = window.innerWidth <= 768;

  // if (isMobile) {
  //   createHotSpot(30, 55, 30, 20, () => {
  //     RoomTextChange("각종 메스들과 의료 약품이 보이는 책상이다.");
  //   });
  //   createHotSpot(90, 57, 28, 18, () => {
  //     RoomTextChange(
  //       "의료 일지와 환자 기록이 보이는 책상이다. 서랍속에는 환자 기록이 더 많이 보인다. ",
  //     );
  //   });
  //   createHotSpot(52, 80, 25, 18, () => {
  //     RoomTextChange(
  //       "병원에서 일하는 의사의 메달이 바닥에 떨어져 있다. 메달에는 이름과 분야가 적혀있다. 이름은 '박준석'이고, 분야는 '흉부외과'이다. ",
  //     );
  //   });
  // } else
  if (!isMobile) {
    createHotSpot(20, 60, 20, 18, () => {
      if (isClueCollected("3번 단서")) {
        RoomTextChange(provisoData["3번 단서"][0].text_repeat);
        return;
      }
      RoomTextChange(provisoData["3번 단서"][0].text_first);
      createProviso("3번 단서");
      createItem(itemData["1번 증거"][0].item);
    });
    createHotSpot(75, 60, 20, 18, () => {
      if (isClueCollected("1번 단서")) {
        RoomTextChange(provisoData["1번 단서"][0].text_repeat);
        return;
      }
      RoomTextChange(provisoData["1번 단서"][0].text_first);
      createProviso("1번 단서");
      createItem(itemData["2번 증거"][0].item);
    });
    createHotSpot(53, 78, 10, 18, () => {
      if (isClueCollected("2번 단서")) {
        RoomTextChange(provisoData["2번 단서"][0].text_repeat);
        return;
      }
      RoomTextChange(provisoData["2번 단서"][0].text_first);
      createProviso("2번 단서");
      createItem(itemData["3번 증거"][0].item);
    });
    createHotSpot(63, 25, 10, 48, () => {
      if (!areAllCluesCollected(["1번 단서", "2번 단서", "3번 단서"])) {
        RoomTextChange(provisoData["수술실 문"][0].text_fail);
        return;
      }
      RoomTextChange(provisoData["수술실 문"][0].text_success);
      NextStage();
    });
  }
}
