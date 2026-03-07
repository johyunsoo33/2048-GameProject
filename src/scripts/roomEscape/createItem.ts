export function createItem(name: string) {
  const itemContainer = document.createElement("div");
  itemContainer.className = `item-container`;
  const itemImage = document.createElement("img");
  itemImage.src = `/${name}.png`;
  const itemBox = document.getElementsByClassName("item")[0] as HTMLDivElement;
  itemContainer.appendChild(itemImage);
  itemBox.appendChild(itemContainer);
}
