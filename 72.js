// console.log(this=== window);
// "use strict"  // good way error window ?=> undefined

// function myFunc2(){
//     console.log(this);
// };
// myFunc2()

function myFunc(){
    "use strict"    
    console.log(this);
};
myFunc();