//swap the array values;
a=[10];
b=[55];

a=[b, b=a][0];
console.log(a);


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