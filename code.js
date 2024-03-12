

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



//shallow and deep copy:
//shallow"
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.b.c = 3; // This will also change `original.b.c` to 3
console.log(original);

// Shallow copy example for an array
const originalArray = [1, 2, [3, 4]];
const shallowCopyArray = originalArray;

shallowCopyArray[2][0] = 300;
console.log(originalArray);

//deep copy:
const original1 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original1));

deepCopy.b.c = 3;


//terrinary operator:
let age = 18;
let vote = age >= 18 ? 'yes' : 'No';
console.log(age);



//spread operator in Array;
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combinedArray = [...firstArray, ...secondArray];
console.log(combinedArray);

const object1 = { name: 'John' };
const object2 = { age: 30 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject);


//rest operator:
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(others); 


const { name, aged, ...rest } = { name: 'John', aged: 30, city: 'New York', country: 'USA' };
console.log(name); // Output: 'John'
console.log(aged); // Output: 30
console.log(rest);




//IIFE function with ES5 & ES6
//ES6:
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
      console.log(i); // Correctly prints 0, 1, 2
  }, 100);
}


//ES5:
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
      console.log(i); // Expectation: 0, then 1, then 2
  }, 100);
}






//call stacks:
function firstFunction() {
  secondFunction();
  console.log('First function called');
}

function secondFunction() {
  thirdFunction();
  console.log('Second function called');
}

function thirdFunction() {
  console.log('Third function called');
}

firstFunction();

//max call stack exceed;
function sayHello(){
  return sayGoodbye();
  }
  
  function sayGoodbye(){
  return sayHello();
  }
  sayHello();
  console.log(sayHello())


//find the mature
const ages1 = [4, 11, 42, 14, 39];
const mature1 = ages1.filter(age => {  
  return age >= 5;
});
console.log(mature1);

//2nd method:
ages.forEach(age =>{
  if(ages > 18){
      console.log(age);
  }

});

//3rd;
let man= ages.filter(mature => mature > 18);
console.log(man);

//i need the output of *,**,*** like this in row
var res = '';
for(var i=0; i<7; i++){
res+= '*';
console.log(res)
}

//output:
let a = 1;
let b = a++;

console.log(a);
console.log(b);


//remove duplicate:
const str = "big black bug bit a big black dog on his big black nose";

const words = str.split(" ");
const uniqueWords = new Set(words);
const result = [...uniqueWords].join(" ");
console.log(result);


//make single array:
const arrA = [1,3,4,5];
const arrB = [1,2,5,6,7];


//make sequence:
const combined = [...new Set([...arrA, ...arrB])];
console.log(combined);
// Step 3: Sort the array to ensure it's in sequence
const sequencedArray = combined.sort((a, b) => a - b);

console.log(sequencedArray);


//output:
let x=0;
console.log(x++);  //0

console.log(++x); //2
console.log(x);  //2

//flat an array and remove duplicate and make it sequence:
var arry =[1,[2,3],[1,3,5,4]];

let flatArray = [].concat(...arry);

console.log(flatArray);

let unique = [...new Set(flatArray)];
console.log(unique);

let sequence = unique.sort((a,b)=>a-b);
console.log(sequence);