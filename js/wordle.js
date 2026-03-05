const answer="mario"

const grid=document.getElementById("grid")

for(let i=0;i<30;i++){

let tile=document.createElement("div")

tile.className="tile"

grid.appendChild(tile)

}

function checkGuess(){

let guess=document.getElementById("guess").value.toLowerCase()

if(guess===answer){

alert("Correct!")

}

else{

alert("Try again")

}

}
