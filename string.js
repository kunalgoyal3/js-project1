let str1="kunal goyal";

let str2='kunal goyal';

console.log(typeof str1);
console.log(typeof str2);

console.log(str1.length);

let str3=`my name is kunal goyal`;
console.log(typeof str3);

const obj={
    name:"kunal",
    father:"mahesh chand",
}
console.log(`my name is ${obj.name} and father name is ${obj.father}`);

//convert into uppercase

console.log(obj.father.toUpperCase());

console.log(obj.father.trim());

console.log(obj.name.slice(0,3));

console.log(obj.name.concat(obj.father));

console.log(obj.name.charAt(3));

