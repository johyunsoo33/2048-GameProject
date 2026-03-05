export function RecordNoteIcon() {
  const recordNoteIcon = document.getElementsByClassName(
    "recordNoteIcon",
  )[0] as HTMLElement;
  recordNoteIcon.style.position = "absolute";
  recordNoteIcon.style.top = "20px";
  recordNoteIcon.style.right = "0%";
  recordNoteIcon.style.zIndex = "10";
  recordNoteIcon.style.width = "60px";
  recordNoteIcon.style.height = "60px";

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
}
document
  .getElementsByClassName("noteBookCloseBtn")?.[0]
  ?.addEventListener("click", () => {
    closeRecordNote();
  });
