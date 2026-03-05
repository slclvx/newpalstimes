const releases=[

{name:"Hollow Knight Silksong",date:"April 12"},
{name:"Metroid Prime 4",date:"June 1"},
{name:"Starfield 2",date:"August 22"}

]

let cal=document.getElementById("calendar")

releases.forEach(r=>{

let div=document.createElement("div")

div.innerText=r.name+" - "+r.date

cal.appendChild(div)

})
