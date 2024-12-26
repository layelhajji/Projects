
const listHtml = document.getElementById("tache");
const inputTask = document.getElementById("input");
const button = document.getElementById("btn");

button.addEventListener("click",()=>{
        button.style.backgroundColor="#AED9E0";
        setTimeout(()=>{
            button.style.backgroundColor = "";},500) 
        addTodo();
        inputTask.value="";
        })


function addTodo() {
    if(inputTask.value==""){
        alert(" Task is empty !!")
    }
    else{
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        let checkbox = document.createElement("input");
        let span=document.createElement("span");

        span.innerHTML=inputTask.value.trim();
        checkbox.type = "checkbox";
        deleteButton.innerText = "Delete";
    
        li.appendChild(checkbox);
        li.appendChild(span); 
        li.appendChild(deleteButton);
        listHtml.appendChild(li);



        checkbox.addEventListener("change",(e)=> {
            if (e.target.checked) {
                e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
            } 
            else {
                e.target.parentElement.querySelector("span").style.textDecoration = "none";
            }

        });

        deleteButton.addEventListener("click",(e)=> {
            e.target.parentElement.remove(); 
        });

        }
    
}

inputTask.addEventListener("keypress",(e)=>{
    if(e.key =="Enter"){
        addTodo();
        inputTask.value="";
    }
});