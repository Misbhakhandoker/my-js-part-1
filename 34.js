// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];
for(let index in fruits){
    // console.log(fruits[index]);
    //   console.log(index);
    fruits2.push(fruits[index]);
}
console.log(fruits2);