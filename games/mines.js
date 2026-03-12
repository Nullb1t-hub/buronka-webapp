let mines=[]
let bombs=3

function loadMines(){

let area=document.getElementById("gameArea")

area.innerHTML=`

<h2>Mines</h2>

Bombs:

<select id="bombCount">

<option>3</option>
<option>5</option>
<option>7</option>

</select>

<div id="grid"></div>

`

createGrid()

}

function createGrid(){

let grid=document.getElementById("grid")

grid.style.display="grid"
grid.style.gridTemplateColumns="repeat(5,60px)"
grid.style.gap="10px"

grid.innerHTML=""

for(let i=0;i<25;i++){

let cell=document.createElement("div")

cell.style.height="60px"
cell.style.background="#1c2440"

cell.onclick=()=>clickMines(i,cell)

grid.appendChild(cell)

}

bombs=document.getElementById("bombCount").value

placeBombs()

}

function placeBombs(){

mines=[]

for(let i=0;i<bombs;i++){

mines.push(Math.floor(Math.random()*25))

}

}

function clickMines(i,cell){

if(mines.includes(i)){

cell.style.background="red"

alert("BOOM")

}else{

cell.style.background="#ffc400"

}
}