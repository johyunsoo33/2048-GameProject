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
}
