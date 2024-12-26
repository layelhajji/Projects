let counter = 0;
let counterHtml = document.getElementById("counter");

function add(){
    counter++;
    counterHtml.innerHTML = counter;
    if (counter %3 == 0 ){
        alert("multiple of 3")
    }
}
