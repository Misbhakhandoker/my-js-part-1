// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(person.key); // 3undefined
//     // console.log(`${key} : ${person.key}`); // undefined
//     // console.log(person[key]);
//     // console.log(`${key} : ${person[key]}`); // ✔1
//     console.log(key, " : " ,person[key]); // ✔2

// }


// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)))
// console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}











// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }