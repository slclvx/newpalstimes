let players=[

{name:"Sebastian",score:9000},
{name:"Alex",score:5000},
{name:"Jordan",score:4200}

]

players.sort((a,b)=>b.score-a.score)

let list=document.getElementById("board")

players.forEach(p=>{

let li=document.createElement("li")

li.innerText=p.name+" - "+p.score

list.appendChild(li)

})
