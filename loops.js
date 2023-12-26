let name = "kunal goyal";

const obj = {
    name : "kunal",
    age : 21    
}
for (let i in obj){
    console.log(i,"= ",obj[i]);
}

let userNum=5;
let gameNum=prompt("enter any number");
while(userNum!=gameNum){
    gameNum= prompt("enter any number");
    console.log("Wrong user number");
}

