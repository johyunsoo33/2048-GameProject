function getOrCreateOverlay(): HTMLElement {
  let overlay = document.getElementById("modal-overlay") as HTMLElement;
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    overlay.style.zIndex = "9";
    overlay.style.display = "none";
    document.body.appendChild(overlay);
  }
  return overlay;
}

export function showOverlay() {
  getOrCreateOverlay().style.display = "block";
}

export function hideOverlay() {
  getOrCreateOverlay().style.display = "none";
}

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
  showOverlay();
  inventory.style.display = "block";
  inventory.style.position = "absolute";
  inventory.style.top = "50%";
  inventory.style.right = "50%";
  inventory.style.transform = "translate(50%, -50%)";
  inventory.style.width = "400px";
  inventory.style.height = "400px";
  inventory.style.backgroundColor = "white";
  inventory.style.border = "2px solid red";
  inventory.style.zIndex = "10";
}

export function closeInventory() {
  const inventory = document.getElementsByClassName(
    "inventory",
  )[0] as HTMLElement;
  inventory.style.display = "none";
  hideOverlay();
}
document
  .getElementsByClassName("inventoryCloseBtn")?.[0]
  ?.addEventListener("click", () => {
    closeInventory();
  });
