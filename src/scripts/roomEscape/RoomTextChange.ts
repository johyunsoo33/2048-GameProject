let step = 0;
let clueTextVisible = false;

export function isHotSpotEnabled() {
  return step >= 2;
}

function getCharText() {
  return document.getElementsByClassName("CharaterText")[0] as HTMLElement;
}

export function RoomTextChange(text: string) {
  const charaterText = getCharText();
  charaterText.style.display = "";
  charaterText.textContent = text;
  charaterText.style.fontSize = "20px";
  charaterText.style.fontWeight = "bold";
  charaterText.style.textAlign = "center";
  charaterText.style.padding = "20px";
  charaterText.style.color = "white";
  if (step >= 2) {
    clueTextVisible = true;
  }
}

function handleAdvance() {
  if (step === 0) {
    RoomTextChange(
      "일단 병원에 들어왔으니 병원 안을 돌아다녀보자. 혹시나 제보자가 놓친 단서가 있을지도 모르니까.",
    );
    step = 1;
  } else if (step === 1) {
    getCharText().style.display = "none";
    step = 2;
    document.querySelectorAll<HTMLElement>(".HotSpot").forEach((el) => {
      el.style.pointerEvents = "auto";
    });
  } else if (step >= 2 && clueTextVisible) {
    getCharText().style.display = "none";
    clueTextVisible = false;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleAdvance();
});

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("HotSpot")) return;
  if (target.closest(".item-container")) return;
  handleAdvance();
});
