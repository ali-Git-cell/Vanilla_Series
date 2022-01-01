const p1Button = document.querySelector("#P1button");
const p2Button = document.querySelector("#P2button");
const p2disp = document.querySelector("#p2disp");
const p1disp = document.querySelector("#p1disp");
const reset = document.querySelector("#reset");
const WinSelect = document.querySelector("#WinSelect");

let p1score = 0;
let p2score = 0;
let winScore = 5;
let GameOver = false;

p1Button.addEventListener("click", function (e) {
  if (!GameOver) {
    p1score += 1;
    if (p1score === winScore) {
      GameOver = true;
    }
    p1disp.textContent = p1score;
  }
});

p2Button.addEventListener("click", function (e) {
  if (!GameOver) {
    p2score += 1;
    if (p2score === winScore) {
      GameOver = true;
    }
    p2disp.textContent = p2score;
  }
});

WinSelect.addEventListener("change", function () {
  winScore = parseInt(this.value);
  rreset();
});

reset.addEventListener("click", rreset);

function rreset() {
  GameOver = false;
  p1score = 0;
  p2score = 0;
  p1disp.textContent = 0;
  p2disp.textContent = 0;
}
