const signup = document.querySelector('#signup')
let IS_ERROR = false
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function handleSignupForm(e){
    e.preventDefault()
    if(IS_ERROR){
        return
    }
    if(!checkError(Array.from(this.children).slice(0, 4))){
        signup.classList.add("loading")
        await new Promise(resolve =>{
            setTimeout(resolve, 1500)
        })
        signup.classList.remove("loading")
        alert("Thank you for signing up!")
    }
}

function checkError(elements){
   elements.forEach(element =>{
    if(element.children[0].value.trim() === ""){
        IS_ERROR = true
        element.classList.add("error")
        const errorMessage = document.createElement("p")
        errorMessage.classList.add("error-message")
        errorMessage.textContent = `${element.children[0].placeholder} cannot be empty`
        element.appendChild(errorMessage)
    } else if(element.children[0].id === "email" && !pattern.test(element.children[0].value)){
        IS_ERROR = true
        element.classList.add("error")
        const errorMessage = document.createElement("p")
        errorMessage.classList.add("error-message")
        errorMessage.textContent = 'Looks like this is not an email'
        element.appendChild(errorMessage)
    }
   })
   return IS_ERROR
}

function removeError(){
    if(!IS_ERROR){
        return
    }
    const arr = Array.from(this.children).slice(0,4)
    arr.forEach(element =>{
        if(element.classList.contains("error")){
           element.classList.remove("error")
           element.children[1].remove()
        }
    })
    IS_ERROR = false
}

signup.addEventListener('submit', handleSignupForm)
signup.addEventListener('input', removeError)