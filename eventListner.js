let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    btn.innerText="work done";
})

btn.addEventListener("mouseover",()=>{
    btn.innerText="please click it";
})

//Assignment 

let btn1=document.querySelector(".btn1");

btn1.addEventListener("click",()=>{
    if(btn1.innerText==="click for dark mode"){
        btn1.innerText="click for light mode";
        let wholebody=document.querySelector("body");
        wholebody.style.backgroundColor="black";
    }
    else if(btn1.innerText==="click for light mode"){
        btn1.innerText="click for dark mode";
        let wholebody=document.querySelector("body");
        wholebody.style.backgroundColor="white";
    }
    

    
})