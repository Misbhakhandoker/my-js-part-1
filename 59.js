// reduce 
const numbers = [1,2,3,4,5, 10];

// aim : sum of all the number in array

// const sum = numbers.reduce((accumulater, currentValue)=>{
//     return accumulater + currentValue
// },100); // defult accumulater value set 100

// accumulater , currentValue,  return
// 1               2             3
// 3               3             6
// 6               4             10
// 10              5             15
// 15              10            25

const userCart = [
    {productId: 1, productName: "mobile", price:12000},
    {productId: 2, productName: "laptop", price:22000},
    {productId: 3, productName: "tv", price:15000},
]
const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
},0)

// totalPrice , currentProduct,  return
// 0               {}            12000
// 12000           22000         34,000
// 34,000          15000         49,000
console.log(totalAmount);