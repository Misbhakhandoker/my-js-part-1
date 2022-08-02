// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "misbha",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}
console.log(person["person hobbies"]);
person[key] = "misbhakhandoker@gmail.com";
console.log(person);