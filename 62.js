// every method
const numbers =[2,4,6,8,10];

// function isEven(number){
//     return number % 2 === 0;
// }

// const ans = numbers.every(isEven);

// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);

// callback function ---> true / false (boolean)

// every method ----> true / false (boolean) // All true then true 

// real time

const userCart = [
    {productId: 1, productName: "mobile", price:12000},
    {productId: 2, productName: "laptop", price:22000},
    {productId: 3, productName: "tv", price:15000},
]
userCart.every((cartItem)=>cartItem.price < 30000)
