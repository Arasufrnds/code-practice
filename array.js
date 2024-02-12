//swap the array values;
a=[10];
b=[55];

a=[b, b=a][0];
console.log(a);

//create an arry and add the value (push)
let given = [1,2,3,4,5];
let value = given.push(6);
console.log(given);

// Reverse the Array:
function reverse(arr){
    var output =[];
    for(let i=arr.length-1; i>=0; i--){
    output.push(arr[i]);
    }
    return output;
    }
    console.log(reverse([2,3,4,5,6,7,8,9]));




// adding values in array (reduce method)
let arr1 = [1,2,3,4,5,6];

let sum = arr1.reduce((accumulator , currentValue) => accumulator + currentValue, 0 )
console.log(sum);



//multiply by 2 for each number (map method)
let char = [1,2,2,3,4,5,5,6,7];
let doubledChar = chars.map(number => number * 2);

console.log(doubledChars);

//add the value in arraylist at particular index; (splice method)
let arrayList = [1, 2, 4, 5];
let index = 2; // Index where you want to add the value
let valueToAdd = 3;

arrayList.splice(index, 0, valueToAdd);

console.log(arrayList);


//remove the value on the particular index (splice method)
let values= ['a','b','c','d','e'];
let remove = 2
values.splice(remove, 1);  // t will remove c only becoz im giving 1 if I give 2 it removes c & d.
console.log(values);

//Duplicate the string (filter method)
let chars= [1,2,2,3,4,5,5,6,7];

let unique = chars.filter((c,index)=>{
    return chars.indexOf(c) === index;
})

console.log(unique);



//second method
let array = [23, 1, 45, 1, 7, 9, 5, 2, 23];

console.log([...new Set(array)]);



// find even in aray (filter method)
let arr = [1,2,3,4,5,3,5,6,7,8];

let even = arr.filter(number => number % 2 === 0);
console.log(even);



//multiple by two
let chars1 = [1,2,2,3,4,5,5,6,7];
let doubledChars = chars1.map(number => number * 2);

console.log(doubledChars);



// for in return the enum string on the iteration
const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (const index in digits) {
  console.log(index);
}



// for in return the index value position on the iteration
const digits1 = [9, 8, 7, 6, 5, 5, 6, 7, 8, 9];

for (const digit of digits1) {
  console.log(digit);
}


//find second largest number in js:
let arr2 =[2,5,6,75,7,8];

let secondLargest = arr2.slice(0).sort(function(a,b) {return b-a})[1];
console.log(secondLargest);

///find largest number in array:
let arr3 =[2,5,6,75,7,8];

console.log(Math.max(...arr3));


//show the number greater than 18
let age = [38,56,34,11,32,15];
age.forEach(person =>{
    if(person  > 18){
        console.log(person );
    }
})