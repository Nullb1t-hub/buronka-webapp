let choice = null
let bet = 0

const coin = document.getElementById("coin")
const resultText = document.getElementById("result")
const betInput = document.getElementById("bet")

function choose(side){

choice = side

if(side === "cow"){
resultText.innerText = "Вы выбрали Бурёнку 🐄"
}

if(side === "normal"){
resultText.innerText = "Вы выбрали обычную 🪙"
}

}


function flipCoin(){

bet = Number(betInput.value)

if(!choice){
alert("Выберите сторону")
return
}

if(bet <= 0){
alert("Введите ставку")
return
}

coin.classList.add("flip")

setTimeout(()=>{

coin.classList.remove("flip")

let result = Math.random() < 0.5 ? "cow" : "normal"

if(result === "cow"){
coin.innerText = "🐄"
}else{
coin.innerText = "🪙"
}

if(result === choice){

let win = bet * 2

resultText.innerText =
"Вы выиграли " + win + " BUR 🎉"

}else{

resultText.innerText =
"Вы проиграли " + bet + " BUR"

}

},2000)

}