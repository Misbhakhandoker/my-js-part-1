// 2015 / es6
// class keyword
// class are fake

class CreateUser{
    constructor(firstName, lastName, email , age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
    return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
    return this.age >= 18;
    }
    sing(){
    return "la la la la" ;
    }
}


const user1 = new CreateUser('mijbah','khandkar','mijbahkhandkar@gmail.com',20,'House Number, Colony, pincode, state')
// const user2 = new CreateUser('kayes','khandkar','mijbahkhandkar@gmail.com',22,'House Number, Colony, pincode, state')
// const user3 = new CreateUser('efat','khandkar','mijbahkhandkar@gmail.com',24,'House Number, Colony, pincode, state')

console.log(user1);
console.log(user1.sing());
console.log(user1.is18());
// console.log(Object.getPrototypeOf(user1));