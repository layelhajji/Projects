let liste = document.querySelector("ul")
let input = document.querySelector("input")
let boutton = document.querySelector(".btn")
let placeholder = document.querySelector("#name")


boutton.addEventListener("click",handleAjout)

function handleAjout(){
    
    if(input.value == ""){
        alert("you should type something") 
        return
    }
    let li=document.createElement("li")
    li.innerText=input.value
    liste.appendChild(li)
    value=""
    placeholder.innerText=""

}
function handleChange(){
    placeholder.innerText = input.value
}




input.addEventListener("keyup",handleChange)

