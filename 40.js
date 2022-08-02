// spread operator
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// // const newArray = [...array1 , ...array2,89,69]
// const newArray = [..."123456789"]  // [...123456789] Uncaught TypeError: 123456789 is not iterable
// console.log(newArray);

// spread operator in objects

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};
const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4",
}


// const newObject = {...obj1,...obj2,key69:"value69"}
// const newObject = {..."abc"};
// const newObject = {...["item1","item2"]}; // real time use same times
// const newObject = {..."abcdefghijklmnopqrstuvwxyz"}
// console.log(newObject);`