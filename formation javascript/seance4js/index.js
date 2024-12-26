function entierEnChaine(x){
    if(Number.isInteger(x)){
        let res = x.toString();
        console.log(res);
    }else{
        console.log("Erreur conversion impossible")
    }
}


// entierEnChaine(56) // résultat : “56”
// entierEnChaine(500) // résultat : “500”
// entierEnChaine({x:"15"}) // Erreur conversion impossible

function sommeTableau(T){
    som=0;
    for (x of T) {
        som+=x
    }

    
    return som;
}
// sommeTableau([1,2,3,4]) // résultat : 10
// sommeTableau([0,6,11,-8]) // résultat : 9

function moyenneTableau(T){
    moy=sommeTableau(T)/T.length
    console.log(moy)
}


// moyenneTableau([1,2,3,4]) // résultat : 2.5
// moyenneTableau([0,6,11,-8]) // résultat : 2.25

let t = [1,4,21,25,5]
function compareFunc(a,b){
    if (a>b){
        return 1
    }else {
        return -1
    }
    return 0
}
console.log(t.sort(compareFunc))
//map traja3 tableau
let T1= t.map(e=>e+1)
//console.log(T1)




T3 = [
    {
    id : 1,
    first:"ahmed",
    last:"ben ali",
    age : 23,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 2,
    first:"aziz",
    last:"ameri",
    age : 44,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    {
    id : 3,
    first:"khalil",
    last: "ben lamine",
    age : 18,
    email : "ahmed.benali@gmail.com",
    address :"Tunis"
    },
    ]
    function getUserById(t,id){
        for (e of t){
            if(e.id= id){
                console.log(e)
                return e;
            }
        }
    }
    
    //getUserById(T3,1)
    // // résultat : {
    // id : 1,
    // first:"ahmed",
    // last:"ben ali",
    // age : 23,
    // email : "ahmed.benali@gmail.com",
    // address :"Tunis"
    // }
    

    
     function sortUsers(t) {
        
        
        let T1 = t.sort(compareFunc)
        consolelog(T1)
        
     }


    sortUsers(T3)
    