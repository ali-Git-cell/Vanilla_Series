const ratings = document.querySelectorAll(".rating");
const sendBTN = document.querySelector("#send");
const ratingContainer = document.querySelector(".ratings-container");

let selectedRate = "Satisfied";

const removeACtive = () => {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
};

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeACtive();
    e.target.parentNode.classList.add("active");
    selectedRate = e.target.nextElementSibling.innerHTML;
    selectedRate = selectedRate.toLocaleLowerCase();
  }
});

sendBTN.addEventListener("click", (e) => {
  panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <br>
      <strong>Feedback: ${
        selectedRate === "satisfied"
          ? "satisfied :)"
          : ":( we will improve more"
      }</strong>
      <p>Your feedback will improve our customer support</p>
  `;
});
