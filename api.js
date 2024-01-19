const url="https://cat-fact.herokuapp.com/facts";

// const getfacts = async()=>{
//     return fetch(url);
// }
let data;
const getfacts= async()=>{
    console.log("getting data from api");
    let response = await fetch(url);
    console.log(response);
    console.log("hello");
     data =response.json();
    console.log(data[0].text);
}
