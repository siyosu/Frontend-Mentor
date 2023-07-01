const card = document.querySelector(".card");
const rateList = document.querySelectorAll(".rate");
const submitButton = document.querySelector("#submit-rate");
let selectedRate;
let isLoading = false;

rateList.forEach((rate) => {
  rate.addEventListener("click", selectRate);
});

submitButton.addEventListener("click", handleSubmit);

function selectRate() {
  selectedRate?.classList.remove("selected");
  selectedRate = this;
  this.classList.add("selected");
}

async function handleSubmit() {
  if (!selectedRate || isLoading) return;
  isLoading = true;
  this.classList.add("submit");
  await new Promise((resolve) => {
    setTimeout(() => {
      const thankyouCard = `
        <div class="icon">
        <img src="./images/illustration-thank-you.svg" alt="" />
        </div>
        <span class="selected-rate">You selected ${selectedRate.dataset.val} out of 5</span>
        <h2 class="title">Thank you!</h2>
        <p class="desc">We appreciate you taking the time to give a
        rating. If you ever need more support, don't hesitate to get in
        touch!
        </p>
        `;
        card.innerHTML = thankyouCard;
        card.classList.remove("rating");
        card.classList.add("thankyou");
    }, 1000);
  });
}
