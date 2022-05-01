const passWord = document.getElementById("password");
const background = document.getElementById("background");

passWord.addEventListener("input", (e) => {
  update = e.target.value;
  // console.log(update.length);
  let lenghtOf = update.length;
  background.style.filter = `blur(${20 - lenghtOf}px)`;
});
