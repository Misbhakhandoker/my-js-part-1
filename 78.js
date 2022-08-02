const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email , age, address){
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user1 = createUser('mijbah','khandkar','mijbahkhandkar@gmail.com',20,'House Number, Colony, pincode, state')
const user2 = createUser('kayes','khandkar','mijbahkhandkar@gmail.com',22,'House Number, Colony, pincode, state')
const user3 = createUser('efat','khandkar','mijbahkhandkar@gmail.com',24,'House Number, Colony, pincode, state')

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
