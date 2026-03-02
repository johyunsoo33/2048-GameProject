import { createRoom1 } from "./room1";
import "../../style.css";
import textData from "../../data/RoomEscapeText/text.json";
import { RoomTextChange } from "./RoomTextChange";
document.addEventListener("DOMContentLoaded", () => {
  createRoom1();
  RoomTextChange(textData["1번방"][0].text);
});
