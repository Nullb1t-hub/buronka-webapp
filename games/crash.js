let crashMultiplier=1
let crashRunning=false
let history=[]

function loadCrash(){

let area=document.getElementById("gameArea")

area.innerHTML=`

<h2>Crash</h2>

<div id="crashHistory"></div>

<div id="crashMultiplier">1.00x</div>

<div id="crashTimer"></div>

`

startCrashRound()

}

function startCrashRound(){

crashMultiplier=1

crashRunning=true

loopCrash()

}

function loopCrash(){

if(!crashRunning) return

crashMultiplier+=0.03

document.getElementById("crashMultiplier").innerText=crashMultiplier.toFixed(2)+"x"

if(Math.random()<0.01){

crashRunning=false

history.unshift(crashMultiplier.toFixed(2))

updateHistory()

setTimeout(startCrashRound,5000)

return

}

setTimeout(loopCrash,100)

}

function updateHistory(){

document.getElementById("crashHistory").innerText=

history.slice(0,10).join(" | ")

}