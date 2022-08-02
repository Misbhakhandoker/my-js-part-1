// param destructuring

// object
// react

const person = {
    firstName: "misbha",
    gender: "male",
    age:200
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     // console.log(obj.age);
// }


function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}


printDetails(person);