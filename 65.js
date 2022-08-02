// splice method
// start , delete , insert

const myArray = ['item1','item2','item3',];

// delete
// const deletedIten = myArray.splice(1,2);
// console.log(deletedIten);
// insert
// myArray.splice(1,0,'inserted item')

// insert and delete
const deletedIten = myArray.splice(1,2,"inserted item1","inserted item2");
console.log(deletedIten);
console.log(myArray);