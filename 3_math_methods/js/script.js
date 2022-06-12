var m = Math
var pi_val = m.PI;
var sine_val = m.sin(30)

console.log(pi_val);
console.log(sine_val);
console.log(Math.SQRT2);

console.log("Floor Method",m.floor(234.5));


// Returning a random integer between two bounds
// This can be achieved with a combination
//  of Math.random() and Math.floor():

function randomGen(min,max){
    const num = Math.floor(Math.random() * (max- min + 1)) + min;

    return num;
}


console.log(randomGen(1,30));