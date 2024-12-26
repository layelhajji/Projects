
const  display=()=>{
    console.log("hello");
    
}
display();



const sum=(...rest)=>{
    let sum=0;
    for(let c of rest){
        sum+=c
    }
    return sum ;
}  
console.log(sum(1,8,7));

