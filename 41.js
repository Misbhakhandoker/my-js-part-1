// object destructuring
const band ={
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year:1968,
    anotherFamousSong: "kashmir",
};
// const bandName = band.bandName;   
// const famousSong = band.famousSong;
// console.log(bandName,famousSong);

// Short cat
// const {bandName, famousSong} = band;
// let {bandName, famousSong:var2} = band;
let {bandName,famousSong,...restProps} = band;

console.log(bandName);
console.log(restProps);