export function createItem(name: string) {
  const slots = Array.from(
    document.getElementsByClassName("item"),
  ) as HTMLDivElement[];

  const alreadyExists = slots.some((slot) =>
    slot.querySelector(`[data-item-name="${name}"]`),
  );
  if (alreadyExists) return;

  const emptySlot = slots.find((slot) => slot.children.length === 0);
  if (!emptySlot) return;

  const itemContainer = document.createElement("div");
  itemContainer.className = `item-container`;
  itemContainer.dataset.itemName = name;
  const itemImage = document.createElement("img");
  itemImage.src = `/${name}.png`;
  itemContainer.appendChild(itemImage);
  emptySlot.appendChild(itemContainer);
}
export function initInventorySlots(count: number = 12) {
  const inventoryBox = document.querySelector(
    ".inventoryBox",
  ) as HTMLDivElement;
  if (!inventoryBox) return;

  // 기존 슬롯 제거 후 재생성
  inventoryBox.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.className = "item";
    inventoryBox.appendChild(slot);
  }
}
