export function createItem(name: string) {
  const slots = Array.from(document.getElementsByClassName("item")) as HTMLDivElement[];

  const alreadyExists = slots.some(slot => slot.querySelector(`[data-item-name="${name}"]`));
  if (alreadyExists) return;

  const emptySlot = slots.find(slot => slot.children.length === 0);
  if (!emptySlot) return;

  const itemContainer = document.createElement("div");
  itemContainer.className = `item-container`;
  itemContainer.dataset.itemName = name;
  const itemImage = document.createElement("img");
  itemImage.src = `/${name}.png`;
  itemContainer.appendChild(itemImage);
  emptySlot.appendChild(itemContainer);
}
