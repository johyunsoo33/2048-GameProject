import { createHotSpot } from "./createHotSpot";
import { NextStage } from "./NextStage";
import { RoomTextChange } from "./RoomTextChange";

export function createRoom1() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    createHotSpot(30, 55, 30, 20, () => {
      RoomTextChange("각종 메스들과 의료 약품이 보이는 책상이다.");
    });
    createHotSpot(90, 57, 28, 18, () => {
      RoomTextChange(
        "의료 일지와 환자 기록이 보이는 책상이다. 서랍속에는 환자 기록이 더 많이 보인다. ",
      );
    });
    createHotSpot(52, 80, 25, 18, () => {
      RoomTextChange(
        "병원에서 일하는 의사의 메달이 바닥에 떨어져 있다. 메달에는 이름과 분야가 적혀있다. 이름은 '박준석'이고, 분야는 '흉부외과'이다. ",
      );
    });
  } else {
    createHotSpot(20, 60, 20, 18, () => {
      RoomTextChange("각종 메스들과 의료 약품이 보이는 책상이다.");
    });
    createHotSpot(75, 60, 20, 18, () => {
      RoomTextChange(
        "의료 일지와 환자 기록이 보이는 책상이다. 서랍속에는 환자 기록이 더 많이 보인다. ",
      );
    });
    createHotSpot(53, 85, 10, 18, () => {
      RoomTextChange(
        "병원에서 일하는 의사의 메달이 바닥에 떨어져 있다. 메달에는 이름과 분야가 적혀있다. 이름은 '박준석'이고, 분야는 '흉부외과'이다. ",
      );
    });
    createHotSpot(63, 25, 10, 48, () => {
      RoomTextChange(
        "수술실로 가는 문이 있다. 들어가보자 더 많은 단서가 있을지도 모르니까.",
      );
      NextStage();
    });
  }
}
