let totalScore = 0;

export function addScore(amount: number) {
  totalScore += amount;
  updateScoreUI();
}

export function getScore(): number {
  return totalScore;
}

export function resetScore() {
  totalScore = 0;
  updateScoreUI();
}
function updateScoreUI() {
  const el = document.getElementById("score");
  if (el) el.textContent = totalScore.toString();
}
