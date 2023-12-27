let btn=document.querySelector(".btn");

btn.onclick=()=>{
    if(btn.innerText=="click here"){
        btn.innerText="button clicked";
    }
    else btn.innerText="click here";
}
btn.onmouseover=()=>{
    console.log("click kr de bhadve");
}
// the below one is also acceptable
// btn.innerText=(btn.innerText==="click here")? "button clicked": "click here";

//event object
// it is a special object that has details about the events

btn.onmouseover=(e)=>{
    console.log(e);
}