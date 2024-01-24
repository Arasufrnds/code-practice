// Reverse the Array:
function reverse(arr){
    var output =[];
    for(let i=arr.length-1; i>=0; i--){
    output.push(arr[i]);
    }
    return output;
    }
    console.log(reverse([2,3,4,5,6,7,8,9]));


// Reverse String without Reverse method:
function reverse(str){
    var output =[];
    for(let i=str.length-1; i>=0; i--){
    output+=str[i];
    }
    return output;
    }
    console.log(reverse("hello"));


//place the index value for position
var input = "apple";

for (let i=0; i < input.length; i++){
let position = input.indexOf(input[i]) - 1;
console.log(input[i] + "=" + position);
}

//closer => inner function access outer variable
function outer(){
    var outerValue = "Im working";
    
    function inner(){
    console.log(outerValue);
    }
    return inner();
    }
    outer();

//shalow copy
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person);

var newPerson = person;
newPerson.nation = "Indian";
console.log(newPerson); 

//Deep copy
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person1);

var newPerson = JSON.parse(JSON.stringify(person1));
newPerson.nation = "Indian";
console.log(newPerson);