// function returning function <= Higher Order function

// 1 way
// function myFunc(){
//     function hello(){
//         return "hello world"
//         // console.log("hello world");
//     }
//     return hello;
// }
// 2 way
function myFunc(){
    return function(){
        return "hello world";
    }
}

const ans = myFunc();
console.log(ans());

// as a input except or function return  this is Higher Order function