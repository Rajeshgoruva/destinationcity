let user = document.getElementById("userinput")
let button = document.getElementById("button")

button.onclick = function(){
    let name = document.getElementById("name")
    name.textContent = user.value
}
   
