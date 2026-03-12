// BUR balance
let balance = 0

const balanceElement = document.getElementById("balance")

function updateBalance(){
    balanceElement.innerText = balance + " BUR"
}



// deposit popup

const depositBtn = document.getElementById("depositBtn")
const depositPopup = document.getElementById("depositPopup")
const closeDeposit = document.getElementById("closeDeposit")

depositBtn.onclick = () => {
    depositPopup.style.display = "flex"
}

closeDeposit.onclick = () => {
    depositPopup.style.display = "none"
}



// PROMOCODE

let usedPromo = false

function enterPromo(){

    if(usedPromo){
        alert("Промокод уже использован")
        return
    }

    const code = prompt("Введите промокод")

    if(code === "Admin18"){

        balance += 1000
        updateBalance()

        usedPromo = true

        alert("Вы получили 1000 BUR")

    }else{

        alert("Неверный промокод")

    }

}



// games navigation

const gameCards = document.querySelectorAll(".game-card")

gameCards.forEach(card => {

    card.onclick = () => {

        const game = card.dataset.game

        if(game === "flip"){
            window.location = "games/flip.html"
        }

        if(game === "crash"){
            window.location = "games/crash.html"
        }

        if(game === "mines"){
            window.location = "games/mines.html"
        }

    }

})



// start
updateBalance()