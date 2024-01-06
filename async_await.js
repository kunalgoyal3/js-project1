// async function hello(){
//     setTimeout(() => {
//         console.log("four second completed");
//     }, 4000);
// }


function getdata(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data = ",dataId);
            resolve();
        }, 5000);
    });
}

console.log("i am waiting ");
async function getalldata(){

    await getdata(1);
    await getdata(2);
}

getalldata();

// for promise (then) case =>

// getdata(6).then(()=>{
//     console.log("hello world");
//     getdata(5).then(()=>{
//         console.log("hello world again");
//     })
// })

console.log("hi after promise i am here");
