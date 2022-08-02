// block scope vs function scope


// let and const are block scope
// var is function scope


// if(true){
//     var firstName = "mijbha";
//     // let firstName = "mijbha";
//     // const firstName = "mijbha";
//     console.log(firstName);
// }
// console.log(firstName);


function myApp(){
    if(true){
        var firstName = "mijbah";
        console.log(firstName);
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);

}
myApp()

// var function scope
// {
//     var firstName = "mijbha";
// }
// console.log(firstName);

// {
//     var firstName = "kayes";
//     console.log(firstName);
// }



// let
// {
//     let firstName = "mijbha";
// }
// console.log(firstName);

// {
//     let firstName = "kayes";
//     console.log(firstName);
// }


// const
// {
//     const firstName = "mijbha";
// }
// console.log(firstName);

// {
//     const firstName = "kayes";
//     console.log(firstName);
// }

// const firstName = "mijbha"; // => block scop
// console.log(firstName);