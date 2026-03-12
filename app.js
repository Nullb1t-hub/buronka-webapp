let balance = 0

const balanceEl = document.getElementById("balance")

function updateBalance(){

balanceEl.innerText = balance

localStorage.setItem("balance",balance)

}



function loadBalance(){

let saved = localStorage.getItem("balance")

if(saved){

balance = Number(saved)

}

updateBalance()

}



function openGame(name){

window.location = "games/" + name + ".html"

}



/* PROMO */

const promoBtn = document.getElementById("promoBtn")

promoBtn.onclick = ()=>{

const code = document.getElementById("promoInput").value

if(code === "Admin18"){

balance += 1000

updateBalance()

alert("Промокод активирован +1000 BUR")

}else{

alert("Неверный код")

}

}



/* DEPOSIT */

const depositBtn = document.getElementById("depositBtn")
const depositPopup = document.getElementById("depositPopup")
const closeDeposit = document.getElementById("closeDeposit")

depositBtn.onclick = ()=>{

depositPopup.style.display="flex"

}

closeDeposit.onclick = ()=>{

depositPopup.style.display="none"

}



loadBalance()