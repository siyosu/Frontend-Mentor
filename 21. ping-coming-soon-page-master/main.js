const subscribeForm = document.querySelector("#subscribe");
const message = document.querySelector("#message");
let isLoading = false;

subscribeForm.addEventListener("submit", handleSubscribeForm);

function handleSubscribeForm(e) {
    e.preventDefault();
    if (isLoading) return;
    subscribeForm.classList.remove("failed", "success")
    subscribeForm.classList.add("loading");
    message.classList.add("hidden");
    isLoading = true;

    const email = this.email.value.trim();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!email || email.lenght < 1) {
        subscribeForm.classList.add("failed");
        message.textContent = "Whoops! It looks like you forgot to add your email";
        removeClass();
        return;
    }
    if (!pattern.test(email)) {
        subscribeForm.classList.add("failed");
        this.email.value = "";
        message.textContent = "Please provide a valid email address";
        removeClass();
        return;
    }
    setTimeout(() => {
        subscribeForm.classList.add("success");
        this.email.value = "";
        message.textContent = "Thank you for signup, we will notify you once we launch.";
        removeClass();
    }, 1000);
}

function removeClass() {
    message.classList.remove("hidden");
    subscribeForm.classList.remove("loading");
    isLoading = false;
}
