function signup(){

let user=document.getElementById("user").value

let pass=document.getElementById("pass").value

localStorage.setItem(user,pass)

alert("Account created")

}
