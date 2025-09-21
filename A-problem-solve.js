// write the function for the missing array value;
function missingArray(arr){
    var n = arr.length;
    var total =((n+2) * (n+1))/2;
    for(let i=0; i< n; i++){
    total -=arr[i];
    }
    return total;
    }
    
    const ex = [1,2,3,4];
    console.log(missingArray(ex));

//predefined method:
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  
    return sum - arrSum;
  }
  
  console.log(findMissingNumber([1, 2, 3, 5]));

// write the function for all missing values in array;
const ar = [22, 23, 25, 28, 48];

  function missingArray(arr){
  let missingValues = [];
  
  for(let i=0; i<arr.length; i++){
     let start = arr[i];
     let end = arr[i + 1];
  
  for(let j=start+1; j<end; j++){
    missingValues.push(j);
  }
  }
   return missingValues.length > 0 ? missingValues : 'missed';
  }
  
  console.log(missingArray(ar));

//find the nth largest without using sort method:
function findNthLargest(arr, n) {
  for (let i = 0; i < n; i++) {
    max = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }
    arr[maxIndex] = [];
  }
  return max;
}

const array = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(findNthLargest(array, 3));


// write the program for to find second largest number in array;
function secondBig(arr){
    let largest = arr[0];
    let second = [];
    for(let i=1; i<arr.length; i++){
    if (arr[i] > largest){
    second = largest;
    largest = arr[i];
    } else if(arr[i] < largest && arr[i] > second){
    second = arr[i];
    }
    }
    return second;
    
    }
    
    const arra=[10,2,4,5,78,99];
    console.log(secondBig(arra));

    

//write a program for to show first largest number in array;
var value = [2,8,5,7,3];

function largest(arr){
    let first = arr[0];
    let second = [];
    for (let i=1; i < arr.length; i++){
    if(arr[i]> first){
        second = first;
        first = arr[i];
    }
    
    }
    return first;
}

console.log(largest(value));


//write a program for to remove the duplicate and arrange the string
const str = "big black bug bit a big black dog on his big black nose";

let words = str.split(' ');
let value = new Set(words);
let result = [...value].join(' ');
console.log(result);

//write a program for to reverse the string in js;
var string = "name my is khan";

function reverse(str){
    let words = str.split(' ');
    let value = words.reverse();
    let result = value.join(' ');
    return result;
}

console.log(reverse(string));

//short hand method:
var string = "name my is khan";

function reverse(str){
    return str.split(' ').reverse().join(' ');
}

console.log(reverse(string))

//write a program for to remove duplicate and reverse the value;
var string = "name my is is is khan";
function duplicate(str){
    let words = str.split(' ');
    let value = new Set(words);
    let result = [...value].reverse().join(' ')
    return result
    
}

console.log(duplicate(string))

//Write a function that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('Hello'));

//method2:
function reverse(str){
    var output ='';
    for(let i=str.length-1; i>=0; i--){
    output+=str[i];
    }
    return output;
    }
    console.log(reverse("hello"));


//Write a function that reverses a given array.
function reverse(arr){
    var output =[];
    for(let i=arr.length-1; i>=0; i--){
    output.push(arr[i]);
    }
    return output;
    }
    console.log(reverse([2,3,4,5,6,7,8,9]));

//reverse the array
    let array1 = [12345];
    let reversedValue = parseInt(arr[0].toString().split('').reverse().join(''));
    
    console.log(reversedValue);

//another method:
let reverse = array.map(num => Number(num.toString().split('').reverse().join('')) );

console.log(reverse);


//Write a function that checks if a given string is a palindrome.
var string = 'level';
function check(str){
    let value = str.split(' ').reverse().join(' ');
    return str === value
}

console.log(check(string));


//write a program for to find the maximum length in setences.
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));

//find nth largest in array:
function findNthLargest(arr, n) {
  arr.sort((a, b) => b - a); // Sort in descending order
  return arr[n - 1]; // Access the nth largest number
}

const numbers = [10, 5, 8, 20, 3];
console.log(findNthLargest(numbers, 3));


//recursion in js:
const data = [
  {
      "name": "p1",
      "child": [
          {
              "name": "p1.1",
              "child": [
                  {
                      "name": "p1.1.1"
                  }
              ]
          },
          {
              "name": "p1.2",
              "child": [
                  {
                      "name": "p1.2.1",
                      "child": [
                          {
                              "name": "p1.2.1.1"
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      "name": "p2",
      "child": [
          {
              "name": "p2.1",
              "child": [
                  {
                      "name": "p2.1.1"
                  }
              ]
          },
          {
              "name": "p2.2"
          }
      ]
  }
];

function findNamesWithChild(arr) {
  const result = [];
  
  function traverse(obj) {
      if (obj.child) {
          result.push(obj.name); // Add the name if it has a 'child' field
          obj.child.forEach(child => traverse(child)); // Recursively traverse child objects
      }
  }

  arr.forEach(item => traverse(item)); // Start traversing the main array
  return result;
}

console.log(findNamesWithChild(data));

//output of program:
function generatePermutations(str) {
    let result = [];
    
    // Helper function to perform permutation
    function permute(arr, currentPermutation) {
        if (arr.length === 0) {
            result.push(currentPermutation);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            permute(newArr, currentPermutation + arr[i]);
        }
    }

    permute(str.split(''), '');  // Split the string into an array and start permutation
    return result;
}

let input = "ABC";
let permutations = generatePermutations(input);
console.log(permutations); 


// problem solving:
function rearrangeArray(arr) {
    let lastTwo = arr.slice(-2);  // Get the last two elements
    let remaining = arr.slice(0, -2);  // Get all elements except the last two
    return lastTwo.concat(remaining);  // Concatenate the last two elements with the remaining array
}

let inputArray = [1, 3, 5, 7, 9];
let outputArray = rearrangeArray(inputArray);
console.log(outputArray); 


//reverse
let arr =[1,2,3,45]

let value = arr.slice(-4).sort((a,b)=>b-a);
console.log(value);


//range function
const range = (start,end) => {
    let result = [];

    for(let i=start; i <=end; i++){
        result.push(i);
    }
    return result;
}

console.log(range(1,50))

//alternate range method
const ranger = (start,end) => {
    return [...Array(start-end).keys()].map((el)=>el + start);
}