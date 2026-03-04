import { createRoom1 } from "./room1";
import "../../style.css";
import textData from "../../data/RoomEscapeText/text.json";
import { RoomTextChange } from "./RoomTextChange";
import { RecordNoteIcon } from "./RecordNote";
import { InventoryIcon } from "./Inventory";
import { PrevStageIcon } from "./prevStage";
document.addEventListener("DOMContentLoaded", () => {
  createRoom1();
  RecordNoteIcon();
  InventoryIcon();
  PrevStageIcon();
  RoomTextChange(textData["1번방"][0].text);
});
