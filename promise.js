// let promise = new Promise((resolve, reject) => {
//     console.log("the promise is resolved");
//     resolve();
// });

// console.log("the promise is", promise);

const getpromise=()=>{
    
    return new Promise((resolve, reject) => {
        console.log("the promise is resolved");
        reject("there is something wrong i think network error");
    });

};

// let promise = getpromise();

// promise.then((result)=>{
//     console.log("the promise is fulfilled again");
//     console.log(result);
// });

// promise.catch((result)=>{
//     console.log("promise cannot solved successfully");
//     console.log(result);
// });


let async1=()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
            console.log("the promise is resolved");
            resolve("success")
       }, 4000);
    });
}

let async2=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("the promise is rejected");
            reject("rejected");
        }, 3000);
    })
}


// console.log("fetching data for async1 ");
// async1().then((msg) => {
//     console.log("message is ", msg);
//     console.log("fetching data for async2 ");
//     async2().then((msg) => {
//         console.log("the data is fetched for async2");
//         console.log("message is ", msg);
//     });
// });

// promise chaining

async1().then((res)=>{
    console.log("async1 is successful");

    return async2();
}).then((res)=>{
    console.log("async2 is rejected");
})
