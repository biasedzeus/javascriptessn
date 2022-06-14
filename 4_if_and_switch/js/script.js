let soup = "chicken noodle soup";
// let customerIsBanned = true;
let customerIsBanned = false;

let reply;
let crackers = true;
if(customerIsBanned){
    reply = "no food for you man";
}
else if(soup && crackers){
    reply = `Here's your order of ${soup} and crackers.`
}
else if(soup){
    reply = `Here's your order of ${soup}`
}else{
    reply = `Sorry, we are out of ${soup} `
}
console.log(reply);


let testScore = 89;
let grade;

if(testScore >= 90){
    console.log("A");
}else if (testScore >= 80){
    console.log("B");
}else if(testScore >=50){
    console.log("C");
}else if(testScore >=33){
console.log("D")
}
else{
    console.log("FAILED");
}







if("" == false){
    console.log("falsy falsy");
}

if (!undefined ){
        console.log("All Falsy Values");
    }
 else{
    console.log("something went wrong");
}

// Switch Statements


switch(3+4){
    case 1:
        console.log("case 1");
        break;
    case 3:
        console.log("case 3");
        break;
    case 7:
        console.log("case 7");
        break;
}

var fruit = "Mangoes";

switch (fruit) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of '+ fruit +'.');
  }
  
  console.log("Is there anything else you'd like?");
