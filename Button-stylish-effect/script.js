const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const buttonT = e.target.offsetTop;
    const buttonL = e.target.offsetLeft;
    const xInside = x - buttonL;
    const yInside = y - buttonT;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});
