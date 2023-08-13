const randomAdviceBtn = document.querySelector("#random-adivce");
const adviceId = document.querySelector("#advice-id");
const advice = document.querySelector("#advice");

const updateAdvice = (data) => {
  setTimeout(() => {
    if (data) {
      adviceId.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    } else {
      adviceId.textContent = "try again";
      advice.textContent =
        "Oops, look's like I failed to give you advice, please try again...";
    }
    adviceId.parentElement.classList.remove("loading");
    advice.parentElement.classList.remove("loading");

    randomAdviceBtn.removeAttribute("disabled");
    randomAdviceBtn.classList.remove("animate-spin");
  }, 1000);
};

randomAdviceBtn.addEventListener("click", () => {
  console.log("Clicked!");
  adviceId.parentElement.classList.add("loading");
  advice.parentElement.classList.add("loading");
  randomAdviceBtn.classList.add("animate-spin");
  randomAdviceBtn.setAttribute("disabled", true);
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok && res.status !== 200) throw res;
      return res.json();
    })
    .then((data) => {
      updateAdvice(data);
    })
    .catch((err) => {
      console.error(err);
      updateAdvice();
    });
});
