function loadFlip(){

let area=document.getElementById("gameArea")

area.innerHTML=`

<h2>Cow Flip</h2>

<div id="coin">🐮</div>

<button onclick="flipCoin()">Flip</button>

`

}

function flipCoin(){

let coin=document.getElementById("coin")

coin.style.transform="rotateY(720deg)"

setTimeout(()=>{

let result=Math.random()<0.5

coin.innerText=result?"😎":"🐄"

},600)

}