// proto , prottype, class
// const user = {
//     firstName: "mijbah",
//     lastName: "khandkar",
//     email: "mijbahkhandkar@gmail.com",
//     age:2,
//     address: "House Number, Colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega
function createUser(firstName, lastName, email , age, address){
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser('mijbah','khandkar','mijbahkhandkar@gmail.com',18,'House Number, Colony, pincode, state')
console.log(user1);
const is18  = user1.is18();
const about  = user1.about();
console.log(about);
console.log(is18);
