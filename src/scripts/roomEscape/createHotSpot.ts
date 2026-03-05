export function createHotSpot(
  x: number,
  y: number,
  width: number,
  height: number,
  onClick: () => void,
) {
  const hotSpot = document.createElement("div");
  hotSpot.className = "HotSpot";
  hotSpot.style.left = `${x}%`;
  hotSpot.style.top = `${y}%`;

  const container = document.getElementsByClassName(
    "RoomGameArea",
  )[0] as HTMLElement;
  const baseWidth = 1920;
  const scale = container.clientWidth / baseWidth;
  const clampedScale = Math.min(scale, 1);

  hotSpot.style.width = `${width * clampedScale}%`;
  hotSpot.style.aspectRatio = "1 / 1";

  hotSpot.addEventListener("click", onClick);
  container.appendChild(hotSpot);
  return hotSpot;
}
