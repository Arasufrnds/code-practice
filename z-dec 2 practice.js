//interitance and interface:
class employee{
    constructor(name,id){
    this.name =name;
    this.id = id;
    }
    
    display(){
    console.log(`Im ${this.name} my id ${this.id} and my salary ${this.salary}`)
    }
    }
    
    class inform extends employee{
    constructor(name,id,salary){
    super(name,id);
    this.salary = salary;
    }
    }
    
    let value = new inform("arasu", 15, 5000);
    value.display();



//find missing array;
const arr=[1,2,3,4,10];

function missingArray(arr){
let missingValues = [];

for(let i=0; i<arr.length-1; i++){
let start = arr[i];
let end = arr[i+1];

for(let j=start+1; j<end; j++){
missingValues.push(j);
}
}
return missingValues;
}

console.log(missingArray(arr));


//reverse array;
function reverse(arr){
    let output = [];
    
    for(let i=arr.length-1; i>=0; i--){
    output.push(arr[i]);
    }
    return output;
    }
    
    console.log(reverse([9,8,7,6]));


//reverse string;
function reverse(str){
    let output = '';
    
    for(let i=str.length-1; i>=0; i--){
    output+=str[i];
    }
    return output;
    }
    
    console.log(reverse("hello"));

// reverse the entire string words;
function reverse(str){
    let words = str.split(' '); 
    let reversedWords = words.reverse(); 
    return reversedWords.join(' ');
  }
  console.log(reverseWords("name my is khan")); 


//removing repeated duplicate in string;
const str = "big black bug bit a big black dog on his big black nose";

let words = str.split(' ');
let same = new Set(words);
let result = [...same].join(' ');
console.log(result);





//reverse the folowing set of array;

const array = [4321, 9876];

let reverse = array.map(num => Number(num.toString().split('').reverse().join('')) );

console.log(reverse);



//find second big number in array
function secondBig(arr){
    let first = arr[0];
    let second = [];
    for(let i=0; i<arr.length; i++){
    if(arr[i] > first){
    second = first;
    first = arr[i];
    }else if(arr[i] < first && arr[i] > second){
    second = arr[i];
    }
    }
    return second;
    }
     const arr = [1,2,3,4,5,6,7,8]
    console.log(secondBig(arr));

//alternate for find largest in array;
let arr3 =[2,5,6,75,7,8];

console.log(Math.max(...arr3));

//2nd method;
let arr2 =[2,5,6,75,7,8];

let secondLargest = arr2.slice(0).sort(function(a,b) {return b-a})[1];
console.log(secondLargest);


//find nth largest in array;
function large(arr, n){
    for(let i=0; i<n; i++){
         max = [];
        for(let j=0; j<arr.length; j++){
            if(arr[j]>max){
                max = arr[j];
                maxIndex = j;
            }
        }
        arr[maxIndex] = [];
    }
    return max;
}

const array = [1,2,3,4,5,6,7,8];
console.log(large(array, 3));

//duplicate of array:
let arr = [1,2,3,4,5,3,5,6,7,8];

let unique = arr.filter((c,index)=>{
return arr.indexOf(c)=== index});

console.log(unique);