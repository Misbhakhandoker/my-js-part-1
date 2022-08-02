// important array methods

// forEach
// map
// filter
// reduce


const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is, ${index} number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);
// }
// myFunc(numbers[0],0)
// myFunc(numbers[1],1)

// for(let i = 0;i<numbers.length;i++){
//     myFunc(numbers[i],i);
// }

// numbers.forEach(myFunc)

// numbers.forEach(function(number,index){
//     console.log(`index is, ${index} number is ${number}`);
// });

// numbers.forEach(function(number,index){
//     console.log(number*3,index);
// })

// real time use forEach

const users=[
    {firstname:"harshit", age:23},
    {firstname:"mijbah", age:20},
    {firstname:"kayes", age:22},
    {firstname:"mohit", age:21},
]
// users.forEach(function(user){
//     console.log(user.firstname);
// })

users.forEach((user,index)=>{ 
    console.log(user.firstname,index);
})

// for(let user of users){
//     console.log(user.firstname);
// }