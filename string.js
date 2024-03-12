//Duplicate the string (filter method)
let chars= ['apple','abc','abc','asd'];

let unique = chars.filter((c,index)=>{
return chars.indexOf(c) === index;
})

console.log(unique);


// Reverse String without Reverse method:
function reverse(str){
    var output ='';
    for(let i=str.length-1; i>=0; i--){
    output+=str[i];
    }
    return output;
    }
    console.log(reverse("hello"));


//place the index value for position
var input = "apple";

for (let i=0; i < input.length; i++){
let position = input.indexOf(input[i])-1;
console.log(input[i] + "=" + position);
}


//add new value in string using(+);

let greeting = "Hello, ";
let name = "John";
let punctuation = "!";

let message = greeting + name + punctuation // "Hello, John!"
  console.log(message);

  let value = ",Arasu know about you"
  let message1 = greeting + name + punctuation + value; // "Hello, John!"
  console.log(message);
     //or
  let message2 = `${greeting}${name}${punctuation}${value}`; // "Hello, World!"
  console.log(combinedString);


//remove duplicate:
const str = "big black bug bit a big black dog on his big black nose";

const words = str.split(" ");
const uniqueWords = new Set(words);
const result = [...uniqueWords].join(" ");
console.log(result);

//reverse string;


function reverse(str){
  let words = str.split(" ");
  words.reverse();
  let value = words.join(" ")
  return value;
}
var string = "name my is khan";
let result1 = reverse(string);
console.log(result1);