// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen2Messege = document.querySelector(".screen2 h2")
const input = document.querySelector("#inputNumber")
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
input.addEventListener('input', () => {

    // pega o valor digitado
    input.value = 

    // remove tudo que não for número
    input.value.replace(/\D/g, '')

})


// Funções 
function handleTryClick(event) {
    event.preventDefault() //não faça o padrão do evento

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        let article = xAttempts == 1
        ? "tentativa"
        : "tentativas"
        toggleScreen()
        screen2Messege.innerText = `acertou em ${xAttempts} ${article}`
        btnReset.focus() 
    }

    inputNumber.value = ""
    xAttempts++   
    
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}




