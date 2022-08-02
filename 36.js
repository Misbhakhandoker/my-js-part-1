// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Misbha",age:20};
const person = {
    name:"Misbha",
    "age":20,
    "hobbies":["codeing", "sleeping","gameing"]
}
console.log(person);

// how to access data from objects 
console.log(person["name"]);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair to objects
// person.gender = "male";
person["gender"] = "male";
// console.log(person);