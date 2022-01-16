const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes() {
  const trig = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxT = box.getBoundingClientRect().top;
    if (boxT < trig) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
