// UI animations for Buronka Casino

function fadeIn(element){

element.style.opacity = 0
element.style.display = "block"

let opacity = 0

let timer = setInterval(()=>{

opacity += 0.05
element.style.opacity = opacity

if(opacity >= 1){
clearInterval(timer)
}

},16)

}



function fadeOut(element){

let opacity = 1

let timer = setInterval(()=>{

opacity -= 0.05
element.style.opacity = opacity

if(opacity <= 0){

clearInterval(timer)
element.style.display = "none"

}

},16)

}



function buttonPress(button){

button.style.transform = "scale(0.92)"

setTimeout(()=>{

button.style.transform = "scale(1)"

},120)

}



function coinWinAnimation(){

let coin = document.createElement("div")

coin.innerText = "🪙"

coin.style.position = "fixed"
coin.style.left = "50%"
coin.style.top = "50%"
coin.style.fontSize = "40px"
coin.style.transition = "all 0.8s ease"

document.body.appendChild(coin)

setTimeout(()=>{

coin.style.top = "20px"
coin.style.left = "90%"

},50)

setTimeout(()=>{

coin.remove()

},900)

}



function gameCardHover(card){

card.onmouseenter = ()=>{

card.style.transform = "scale(1.05)"

}

card.onmouseleave = ()=>{

card.style.transform = "scale(1)"

}

}



function animateGameCards(){

let cards = document.querySelectorAll(".gameCard")

cards.forEach((card,i)=>{

card.style.opacity = 0
card.style.transform = "translateY(30px)"

setTimeout(()=>{

card.style.transition = "all 0.4s"
card.style.opacity = 1
card.style.transform = "translateY(0)"

},i*120)

})

}