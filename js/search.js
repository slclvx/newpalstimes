const articles=[

"Indie Games Changing the Industry",
"Next Generation Console Rumors",
"AI Game Development"

]

function search(){

let q=document.getElementById("search").value.toLowerCase()

let results=articles.filter(a=>a.toLowerCase().includes(q))

alert(results.join("\n"))

}
