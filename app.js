let coins = localStorage.getItem("coins")

if(!coins){

coins=1000
localStorage.setItem("coins",coins)

}

updateBalance()

function updateBalance(){

document.getElementById("coins").innerText=coins

}

function openDeposit(){

document.getElementById("depositMenu").classList.remove("hidden")

}

function closeDeposit(){

document.getElementById("depositMenu").classList.add("hidden")

}

function openGame(game){

document.querySelector(".games").style.display="none"

document.getElementById("gameScreen").classList.remove("hidden")

if(game==="crash") loadCrash()

if(game==="mines") loadMines()

if(game==="flip") loadFlip()

}

function backHome(){

document.getElementById("gameScreen").classList.add("hidden")

document.querySelector(".games").style.display="grid"

}