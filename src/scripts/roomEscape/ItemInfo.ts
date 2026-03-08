import itemData from "../../data/RoomEscapeText/item.json";
import { RoomTextChange } from "./RoomTextChange";

type ItemKey = keyof typeof itemData;

export function ItemInfo(number: ItemKey): string {
  const itemInfoText = itemData[number][0].info;
  return itemInfoText;
}

document.addEventListener("click", (e) => {
  const target = (e.target as HTMLElement).closest(
    ".item-container",
  ) as HTMLDivElement | null;
  if (!target) return;

  const itemName = target.dataset.itemName;
  if (!itemName) return;

  const key = (Object.keys(itemData) as ItemKey[]).find(
    (k) => itemData[k][0].item === itemName,
  );
  if (!key) return;

  RoomTextChange(ItemInfo(key));
});
