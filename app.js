let coins = localStorage.getItem("coins")

if(!coins){

coins = 1000
localStorage.setItem("coins",coins)

}

updateCoins()


function updateCoins(){

document.getElementById("coins").innerText = coins

}



function applyPromo(){

let code = document.getElementById("promoInput").value

if(code === "Admin18"){

coins = parseInt(coins)+1000

localStorage.setItem("coins",coins)

updateCoins()

alert("Promo activated +1000 BUR")

}else{

alert("Invalid promo")

}

}



function connectWallet(){

alert("Wallet coming soon")

}



function openGame(game){

document.querySelector(".games").style.display="none"

document.getElementById("gameScreen").classList.remove("hidden")

document.getElementById("flipGame").classList.add("hidden")
document.getElementById("crashGame").classList.add("hidden")
document.getElementById("minesGame").classList.add("hidden")

if(game==="flip"){

document.getElementById("gameTitle").innerText="Cow Flip"
document.getElementById("flipGame").classList.remove("hidden")

}

if(game==="crash"){

document.getElementById("gameTitle").innerText="Crash"
document.getElementById("crashGame").classList.remove("hidden")

}

if(game==="mines"){

document.getElementById("gameTitle").innerText="Mines"
document.getElementById("minesGame").classList.remove("hidden")

}

}



function closeGame(){

document.querySelector(".games").style.display="flex"

document.getElementById("gameScreen").classList.add("hidden")

}



function playFlip(choice){

let bet = parseInt(document.getElementById("betInput").value)

if(bet>coins) return alert("No balance")

coins -= bet

let result = Math.random() < 0.5 ? "cool":"boring"

if(choice===result){

coins += bet*2

alert("You Win!")

}else{

alert("You Lose")

}

localStorage.setItem("coins",coins)

updateCoins()

}



let crashRunning=false
let multiplier=1
let betAmount=0


function startCrash(){

betAmount=parseInt(document.getElementById("betInput").value)

if(betAmount>coins) return alert("No balance")

coins-=betAmount
updateCoins()

crashRunning=true
multiplier=1

crashLoop()

}



function crashLoop(){

if(!crashRunning) return

multiplier+=0.02

document.getElementById("multiplier").innerText=multiplier.toFixed(2)+"x"

if(Math.random()<0.02){

crashRunning=false

alert("Crashed!")

return

}

setTimeout(crashLoop,100)

}



function cashout(){

if(!crashRunning) return

let win = betAmount * multiplier

coins += Math.floor(win)

crashRunning=false

localStorage.setItem("coins",coins)

updateCoins()

alert("You won "+Math.floor(win))

}



let mines=[]
let minesCount=3


function startMines(){

let grid=document.getElementById("minesGrid")

grid.innerHTML=""

mines=[]

for(let i=0;i<25;i++){

let cell=document.createElement("div")

cell.className="cell"

cell.onclick=()=>clickCell(i,cell)

grid.appendChild(cell)

}

for(let i=0;i<minesCount;i++){

let pos=Math.floor(Math.random()*25)

mines.push(pos)

}

}



function clickCell(i,cell){

if(mines.includes(i)){

cell.style.background="red"

alert("Boom!")

}else{

cell.classList.add("open")

coins+=5

updateCoins()

}

}
