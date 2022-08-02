// call apply bind
// function hello(){
//     console.log("hello world");
// }
// hello.call();

function about(hobby, favMusician){
    console.log(this.firstName, this.age,hobby,favMusician);
}

const user1 = {
    firstName : "misbah",
    age : 8,
}
const user2 = {
    firstName : "kayes",
    age : 9,

}
// user1.about.call(user2);
// user1.about.call(user1);
// user1.about.call();
// user1.about();
// about.call(user2)

// apply
// about.call(user1, "guitar", "bach")
// about.apply(user1, ["guitar", "bach"]);

// bind
const func = about.bind(user1, "guitar", "bach") //function return
func();