// Strings 

const myVar = "NeverGonnaGive"
const browserType = 'mozilla';


// The Length Property

console.log(myVar.length)
console.log(myVar.charAt(1))


// IndexOf Method
// If the string contains the substring, indexOf() returns the index 
// of the first occurrence of the substring. If the string does not contain
//  the substring, indexOf() returns -1.

console.log(myVar.indexOf('Gonna'));

// Last Index Of Method

console.log(myVar.lastIndexOf('e'));


// Slice Method
console.log(myVar.slice(0,5));


// to Upper Case Method
console.log(myVar.toUpperCase());

// to lower Case Method
console.log(myVar.toLowerCase());



// includes() method
console.log(myVar.includes("Never"));

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');


}
// Startswith And EndsWith Method()

console.log("StartsWith",myVar.startsWith("Never"))
console.log("EndsWith",myVar.endsWith("Give"))





// Split() Method
console.log(myVar.split("Gonna"))





