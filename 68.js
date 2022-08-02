// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like opject)
// duplicate keys are not allowed like objects


// different between maps and opjects

// opjects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string  // 99.9%
// key -> symbol  // 1%
// const person = {
//     firstName : "harshit",
//     age:7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair
// const person = new Map();
// person.set('firstName','Harshit');
// person.set('age',7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1:'one'},'onetwothree'); //object letrale

// console.log(person);
// console.log(person.get(1));
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key , typeof key);
// }
// for(let [key, value] of person){ //destrakter
//     // console.log(Array.isArray(key));
//     console.log(key,value);
// }

// const person = new Map([['firstName', 'mijbah'],['age',7],])
// console.log(person);
// real time use
const person1 = {
    id: 1,
    firstName: 'mijbah'
}
const person2 = {
    id: 2,
    firstName: 'joyt'
}
const extraInfo = new Map();
extraInfo.set(person1, {age : 8, gender: 'male'});
extraInfo.set(person2, {age : 9, gender: 'female'});
// console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
