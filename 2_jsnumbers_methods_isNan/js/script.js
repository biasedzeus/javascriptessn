// Constants

const num = 12345;
const notNum = "not number";
const nan_const = NaN;

console.log(123 === 123.0); //true

console.log(Number('123'));   //123
console.log(Number('randomtext')); //Nan
console.log(Number(undefined)); //Nan

// Number Properties 

console.log("---------Number Properties-----");
console.log(Number.NaN);


console.log(Number.isNaN('wellIsIt')); //False
console.log(Number.isFinite(100)); //true
console.log(Number.isFinite("well")); //false


console.log(Number.isInteger(nan_const)); //false
console.log(Number.isInteger(notNum)); //false
console.log(Number.isInteger(num)); //true

console.log("Parse Float",Number.parseFloat(notNum));
console.log("Parse Float",Number.parseFloat(num));
console.log("Parse Float",Number.parseFloat(nan_const));
console.log("Parse Float",Number.parseFloat('234'));

console.log(Number('123')); //123
console.log(Number('123') === 123); //true
console.log(Number('')); //0
console.log(null); //0
console.log(Number('0x11')); //17
console.log(Number('0b11')); //3
console.log(Number('0o11')); //9
console.log(Number('foo')); //Nan
console.log(Number('100a')); //Nan
console.log(Number('-Infinity')); // - Infinity





