
//closer => inner function access outer variable
function outer(){
    var outerValue = "Im working";
    
    function inner(){
    console.log(outerValue);
    }
    return inner();
    }
    outer();

// boolean output
var bar = true;
console.log(bar + 0);    0
console.log(bar + "xyz");  xyz
console.log(bar + true);   2
console.log(bar + false);  1

//what is the output
let user = {

  show() {
    console.log(arguments)
  },
}
user.show(1, 2, 3);    

//outoput: 0: 1,
// 1: 2,
// 2: 3

//what is the output
var a = 10;
 
function sum(b = 7){
return a + b;
}

console.log(sum()); 


//call back function;

function check(msg){
  console.log("Hello" + msg)
}

function greeting(callback){
  var message = "Im doing good";
  callback(message);
}

greeting(check);


//To maintain higher order function in js (reduce,filter,map,forEach);

//reduce() => The .reduce() method iterates through an array and returns a single value.

let array1 = [2,3,5,6,7];

let add = array1.reduce((accumulator,curentValue)=>accumulator + curentValue, 0);
console.log(add);


//map() =>The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

//The original array does not get altered, and the returned array may contain different elements than the original array.

let array2 = [1,2,3,4,5,6];

let multipleValue = array2.map(number =>  number * 10);
console.log(multipleValue);

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);


//filter() =>The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

const ages = [4, 11, 42, 14, 39];
const mature = ages.filter(age => {  
  return age >= 5;
});
console.log(mature);


//.forEach
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((item, index) => console.log(index, item));


//var, let, const
//Use var if you want function-scoped variables that can be hoisted.
// Use let if you want block-scoped variables that can be reassigned.
// Use const if you want block-scoped variables that are constant and cannot be reassigned.
function example(){
  if(true){
    var x = 10;   // => let y= 10;
    console.log(x);
  }
  console.log(x);
}
example();

    













