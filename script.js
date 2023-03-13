const rates = document.querySelectorAll(".rating__value");
const btnSubmit = document.querySelector(".rating__button");
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");
const thankyouRate = document.querySelector(".thankyou__rate");

let selectedRate;

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    removeActive(rates);
    rate.classList.add("active");
    selectedRate = rate.textContent;
  });
});

function removeActive(list) {
  list.forEach((el) => {
    el.classList.remove("active");
  });
}

btnSubmit.addEventListener("click", () => {
  ratingState.style.display = "none";
  thankyouState.style.display = "block";

  thankyouRate.innerHTML = `You selected ${selectedRate} out of 5`;
});
