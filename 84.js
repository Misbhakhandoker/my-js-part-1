function CreateUser(firstName, lastName, email , age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = function(){
    return "la la la la" ;
}

const user1 = new CreateUser('mijbah','khandkar','mijbahkhandkar@gmail.com',20,'House Number, Colony, pincode, state')
const user2 = new CreateUser('kayes','khandkar','mijbahkhandkar@gmail.com',22,'House Number, Colony, pincode, state')
const user3 = new CreateUser('efat','khandkar','mijbahkhandkar@gmail.com',24,'House Number, Colony, pincode, state')

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
