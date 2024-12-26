let interval = 1000;
//setInterval(timer,interval);

let timerHtml=document.querySelector("#timer")
setInterval (timer,interval);
let time =0;
let increment=false;
function timer(){
    if(increment){
    time++ ;
    timerHtml.innerHTML= time
    }
}
function start(){
    increment=true
}

function stop(){
    increment=false;
}

