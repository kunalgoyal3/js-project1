function fun(first){
    console.log(first);
}

const arrowsum=()=>{
    console.log(arrowsum);
}
console.log(arrowsum);

//5:10 left at night time
//ab subah milte hai


// ForEach loop in arrays 


let arr=[4,5,6,7];

// multiply every element by 2 with the help of forEach

arr.forEach((element)=>{
    element=element*2;
    console.log(element*2);
})

let anotherarray=["one","two","three"];

anotherarray.forEach((element,index, arr)=>{
    console.log(element.toUpperCase());
    console.log(`index no is ${index}`);
    console.log(`array itself is ${arr}`);
})

// higher order function are the function which take function as a parameter or return function 














