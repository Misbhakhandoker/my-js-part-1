// arrow functions

const user1 = {
    firstName : "misbah",
    age : 8,
    about : ()=>{
        console.log(this); // 1 level up
    console.log(this.firstName, this.age);
    }
}

user1.about(user1);
user1.about.call(user1);