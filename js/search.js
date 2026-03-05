const articles=[
"New Nintendo Console Rumors",
"Top Indie Games of 2026",
"AI in Game Development"
]

function search(){

let q=document.getElementById("search").value.toLowerCase()

let results=articles.filter(a=>a.toLowerCase().includes(q))

alert("Results:\n"+results.join("\n"))

}
