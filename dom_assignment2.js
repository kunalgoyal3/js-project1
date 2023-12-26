let all_dives=document.querySelectorAll(".box");


let div_no=1;
for(div of all_dives){
    div.innerText=`this is ${div_no++} div`;
}

console.log(all_dives);