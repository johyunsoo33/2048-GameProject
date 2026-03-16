import { createHotSpot } from "./createHotSpot";
import { createItem } from "./createItem";
import {
  areAllCluesCollected,
  createProviso,
  isClueCollected,
} from "./proviso";
import { RoomTextChange } from "./RoomTextChange";
import itemData from "../../data/RoomEscapeText/item.json";
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
      if (isClueCollected("3번 단서")) {
        RoomTextChange(
          "이미 조사한 책상이다. 메스와 의료 약품 외엔 특별한 게 없었다.",
        );
        return;
      }
      RoomTextChange("각종 메스들과 의료 약품이 보이는 책상이다.");
      createProviso("3번 단서");
      createItem(itemData["1번 증거"][0].item);
    });
    createHotSpot(75, 60, 20, 18, () => {
      if (isClueCollected("1번 단서")) {
        RoomTextChange("이미 살펴본 책상이다. 환자 기록은 이미 확인했다.");
        return;
      }
      RoomTextChange(
        "의료 일지와 환자 기록이 보이는 책상이다. 서랍속에는 환자 기록이 더 많이 보인다. ",
      );
      createProviso("1번 단서");
      createItem(itemData["2번 증거"][0].item);
    });
    createHotSpot(53, 78, 10, 18, () => {
      if (isClueCollected("")) {
        RoomTextChange("이미 확인한 메달이다. 박준석, 흉부외과.");
        return;
      }
      RoomTextChange(
        "병원에서 일하는 의사의 메달이 바닥에 떨어져 있다. 메달에는 이름과 분야가 적혀있다. 이름은 '박준석'이고, 분야는 '흉부외과'이다. ",
      );
      createProviso("2번 단서");
      createItem(itemData["3번 증거"][0].item);
    });
    createHotSpot(63, 25, 10, 48, () => {
      if (isClueCollected("")) {
        RoomTextChange("이미 확인한 의약품들이다.");
        return;
      }
      RoomTextChange("수술실에서 사용한 의약품같다 확인해보자");
      NextStage();
    });
  }
}
