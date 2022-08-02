// find method

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length ===3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// realtime
const users=[
    {userId:1,userName:"harshit",},
    {userId:2,userName:"mijbah",},
    {userId:3,userName:"kayes",},
    {userId:4,userName:"mohit",},
]
const myUser = users.find((user)=>user.userId===3);
console.log(myUser);