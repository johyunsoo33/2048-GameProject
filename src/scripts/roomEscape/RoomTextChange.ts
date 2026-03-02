export function RoomTextChange(text: string) {
  const charaterText = document.getElementsByClassName(
    "CharaterText",
  )[0] as HTMLElement;
  charaterText.style.display = "";
  charaterText.textContent = text;
  charaterText.style.fontSize = "20px";
  charaterText.style.fontWeight = "bold";
  charaterText.style.textAlign = "center";
  charaterText.style.padding = "20px";
  charaterText.style.color = "white";
}

let step = 0;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Enter":
      if (step === 0) {
        RoomTextChange(
          "일단 병원에 들어왔으니 병원 안을 돌아다녀보자. 혹시나 제보자가 놓친 단서가 있을지도 모르니까.",
        );
        step = 1;
      } else if (step === 1) {
        const charaterText = document.getElementsByClassName(
          "CharaterText",
        )[0] as HTMLElement;
        charaterText.style.display = "none";
        step = 2;
      }
      break;
  }
});

document.addEventListener("click", () => {});
