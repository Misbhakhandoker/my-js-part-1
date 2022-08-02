// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la';
//     }
// }
function createUser(firstName, lastName, email , age, address){
    const user = Object.create(createUser.prototype)
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.sing = function(){
    return "la la la la" ;
}

const user1 = createUser('mijbah','khandkar','mijbahkhandkar@gmail.com',20,'House Number, Colony, pincode, state')
const user2 = createUser('kayes','khandkar','mijbahkhandkar@gmail.com',22,'House Number, Colony, pincode, state')
const user3 = createUser('efat','khandkar','mijbahkhandkar@gmail.com',24,'House Number, Colony, pincode, state')

console.log(user1);
console.log(user1.sing());
console.log(user1.is18());
