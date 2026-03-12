let multiplier = 1
let crashed = false
let betting = true

let bet = 0
let playing = false

const multiplierEl = document.getElementById("multiplier")
const timerEl = document.getElementById("timer")
const historyEl = document.getElementById("history")

const betBtn = document.getElementById("betBtn")
const cashBtn = document.getElementById("cashBtn")
const betInput = document.getElementById("betAmount")

let crashPoint = 0


function generateCrash(){

    return (Math.random()*5 + 1).toFixed(2)

}



function startRound(){

    multiplier = 1
    crashed = false
    betting = true
    playing = false

    crashPoint = generateCrash()

    startTimer()

}



function startTimer(){

    let t = 5

    timerEl.innerText = "Ставки через " + t

    let timer = setInterval(()=>{

        t--

        timerEl.innerText = "Ставки через " + t

        if(t <= 0){

            clearInterval(timer)

            betting = false
            timerEl.innerText = "Идёт игра"

            startCrash()

        }

    },1000)

}



function startCrash(){

    let speed = setInterval(()=>{

        multiplier += 0.02

        multiplierEl.innerText = multiplier.toFixed(2) + "x"

        if(multiplier >= crashPoint){

            clearInterval(speed)

            crashed = true

            multiplierEl.innerText = crashPoint + "x 💥"

            addHistory(crashPoint)

            setTimeout(startRound,4000)

        }

    },50)

}



function addHistory(x){

    let el = document.createElement("div")

    el.innerText = x + "x"

    historyEl.prepend(el)

}



betBtn.onclick = () => {

    if(!betting){
        alert("Ставки закрыты")
        return
    }

    bet = Number(betInput.value)

    if(bet <= 0){
        alert("Введите ставку")
        return
    }

    playing = true

    alert("Ставка принята")

}



cashBtn.onclick = () => {

    if(!playing){
        return
    }

    if(crashed){
        alert("Вы проиграли")
        playing = false
        return
    }

    let win = bet * multiplier

    alert("Вы забрали " + win.toFixed(0) + " BUR")

    playing = false

}



startRound()