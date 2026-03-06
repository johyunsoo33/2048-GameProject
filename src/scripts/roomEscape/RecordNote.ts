import { resetCurrentPage } from "./proviso";
import { showOverlay, hideOverlay } from "./Inventory";

export function RecordNoteIcon() {
  const recordNoteIcon = document.getElementsByClassName(
    "recordNoteIcon",
  )[0] as HTMLElement;
  recordNoteIcon.style.position = "absolute";
  recordNoteIcon.style.top = "20px";
  recordNoteIcon.style.right = "70px";
  recordNoteIcon.style.zIndex = "5";
  recordNoteIcon.style.width = "90px";
  recordNoteIcon.style.height = "90px";

  const recordNote = document.getElementsByClassName(
    "recordNoteBook",
  )[0] as HTMLElement;
  recordNote.style.display = "none";

  recordNoteIcon.addEventListener("click", () => {
    RecordNote();
  });
}

export function RecordNote() {
  const recordNote = document.getElementsByClassName(
    "recordNoteBook",
  )[0] as HTMLElement;
  showOverlay(closeRecordNote);
  recordNote.style.display = "block";
  recordNote.style.position = "absolute";
  recordNote.style.top = "50%";
  recordNote.style.right = "50%";
  recordNote.style.transform = "translate(50%, -50%)";
  recordNote.style.width = "400px";
  recordNote.style.height = "300px";
  recordNote.style.backgroundColor = "white";
  recordNote.style.border = "2px solid red";
  recordNote.style.zIndex = "10";
}

export function closeRecordNote() {
  const recordNote = document.getElementsByClassName(
    "recordNoteBook",
  )[0] as HTMLElement;
  recordNote.style.display = "none";
  hideOverlay();
  resetCurrentPage();
}
