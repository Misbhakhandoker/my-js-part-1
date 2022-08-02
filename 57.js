// map method
const numbers = [3,4,6,1,8];

const square = function(number){
    return number*number
    // console.log(number*number); // error
}
// const squareNumber = numbers.map(square);  // map new array return

// const squareNumber = numbers.map(function(number){
//     return number*number;
// });

// const squareNumber = numbers.map((number,index)=>{
    //     return index;
    // });
    
    // console.log(squareNumber);


// real time use map

const users=[
    {firstname:"harshit", age:23},
    {firstname:"mijbah", age:20},
    {firstname:"kayes", age:22},
    {firstname:"mohit", age:21},
]

const userName = users.map((user)=>{
    return user.firstname
})
console.log(userName);



