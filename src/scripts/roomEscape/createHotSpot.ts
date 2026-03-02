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
  hotSpot.style.width = `${width}%`;
  hotSpot.style.height = `${height}%`;
  hotSpot.addEventListener("click", onClick);
  document.getElementsByClassName("RoomMainBox")[0].appendChild(hotSpot);
  return hotSpot;
}
