export function createRoom1() {
  const roomMainBox = document.getElementsByClassName(
    "RoomMainBox",
  )[0] as HTMLElement;
  roomMainBox.style.backgroundImage = "url('/room1.png')";
}
createRoom1();
