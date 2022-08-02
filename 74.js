const user1 = {
    firstName : "misbah",
    age : 8,
    about : function(){
    console.log(this.firstName, this.age);
    }
}

// don't do this mistake
// user1.about();
// const myfunc = function(){
//     console.log(this.firstName, this.age);
//     };
// const myfunc = user1.about;

// do this

const myfunc = user1.about.bind(user1);
myfunc()