// methods
// function inside object

// const person = {
//     firstName : "Mijbah",
//     age :18,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// person.about();

//this
function personInof(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Kayes",
    age :22,
    about:personInof
};
const person2 = {
    firstName : "Efat",
    age :24,
    about:personInof
};
const person3 = {
    firstName : "deko",
    age :27,
    about:personInof
};

person1.about()
person2.about()
person3.about()