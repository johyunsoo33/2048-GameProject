import { createRoom1 } from "./room1";
import "../../style.css";
import textData from "../../data/RoomEscapeText/text.json";
import { RoomTextChange } from "./RoomTextChange";
import { RecordNoteIcon } from "./RecordNote";
import { InventoryIcon } from "./Inventory";
import { PrevStageIcon } from "./prevStage";
import { initProviso } from "./proviso";
import { initInventorySlots } from "./createItem";
document.addEventListener("DOMContentLoaded", () => {
  createRoom1();
  RecordNoteIcon();
  InventoryIcon();
  PrevStageIcon();
  initProviso();
  initInventorySlots(12);
  RoomTextChange(textData["1번방"][0].text);
});
