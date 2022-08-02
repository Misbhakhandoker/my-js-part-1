// clone using Object.assign

// memory
const obj = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = obj;
// const obj2 = {...obj}; // 1 way cloneing new
const obj2 = Object.assign({}, obj); // 2 way cloneing old

obj.key3 = "value3";
console.log(obj);
console.log(obj2);
