export function InventoryIcon() {
  const inventoryIcon = document.getElementsByClassName(
    "inventoryIcon",
  )[0] as HTMLElement;
  inventoryIcon.style.position = "absolute";
  inventoryIcon.style.top = "20px";
  inventoryIcon.style.left = "70px";
  inventoryIcon.style.zIndex = "10";
  inventoryIcon.style.width = "60px";
  inventoryIcon.style.height = "60px";

  const recordNote = document.getElementsByClassName(
    "recordNoteBook",
  )[0] as HTMLElement;
  recordNote.style.display = "none";

  inventoryIcon.addEventListener("click", () => {
    Inventory();
  });
}

export function Inventory() {
  const inventory = document.getElementsByClassName(
    "inventory",
  )[0] as HTMLElement;
  inventory.style.display = "block";
  inventory.style.position = "absolute";
  inventory.style.top = "50%";
  inventory.style.right = "50%";
  inventory.style.transform = "translate(50%, -50%)";
  inventory.style.width = "400px";
  inventory.style.height = "300px";
  inventory.style.backgroundColor = "white";
  inventory.style.border = "2px solid red";
  inventory.style.zIndex = "10";
}

export function closeInventory() {
  const inventory = document.getElementsByClassName(
    "inventory",
  )[0] as HTMLElement;
  inventory.style.display = "none";
}
document
  .getElementsByClassName("inventoryCloseBtn")?.[0]
  ?.addEventListener("click", () => {
    closeInventory();
  });
