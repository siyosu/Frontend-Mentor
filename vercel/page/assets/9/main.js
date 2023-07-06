const signupForm = document.querySelector("#signup")
const container = document.querySelector(".container")
const success = document.querySelector(".success")

async function handleSignup(e){
    e.preventDefault()
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(this.email.value.trim() < 5 || !pattern.test(this.email.value)){
        return this.classList.add('invalid')
    }
    this.classList.add('loading')
    await new Promise(resolve =>{
        setTimeout(resolve, 1000)
    })
    container.style.display = "none"
    document.querySelector(".your-email").textContent = this.email.value
    success.style.display = "flex"
    this.classList.remove("loading")
    this.email.value = ""
}

signupForm.addEventListener('submit', handleSignup)
signupForm.addEventListener('input', ()=>{
    signupForm.classList.remove('invalid')
})

function dismissMessage(){
    success.style.display = "none"
    container.style.display = "grid"
}
document.querySelector("#dismiss").addEventListener("click", dismissMessage)