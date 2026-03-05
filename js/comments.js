function post(){

let text=document.getElementById("comment").value

let div=document.createElement("div")

div.innerText=text

document.getElementById("comments").appendChild(div)

}
