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

console.log("shallow value", person);

var newPerson = person;
newPerson.nation = "Indian";
console.log(newPerson); 

//Deep copy
const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log('Deep Value', person1);

var newPerson = JSON.parse(JSON.stringify(person1));
newPerson.nation = "Indian";
console.log(newPerson);


//swap the array values;
a=[10];
b=[55];

a=[b, b=a][0];
console.log(a);


//Duplicate the array and string
let chars= [1,2,2,3,4,5,5,6,7];

let unique = chars.filter((c,index)=>{
return chars.indexOf(c) === index;
})

console.log(unique);

//find the Duplicate in object
const value =[
    {id:1, name:"count"},
    {id:1, name:"count1"},
    {id:1, name:"count2"},
    {id:1, name:"count"},
    {id:1, name:"count"},
    ]
    
    const unique1 =[...new Map(value.map((m)=>[m.id,m])).values()];
    
    console.log(unique1);

// call and apply method:

var car = {brand:'ford', model:'2020'}

function carInfo(ownerName){
    console.log(ownerName + "My car is" + this.brand + "year" + this.year)
}

carInfo.call(car,'arasu');
carInfo.apply(car, ['arasu']);


//bind : its need an external finction for to bind the value in the function to get output, we using constructor function to achieve this.

var car = {brand:'ford', model:'2020',

carInfo:function(ownerName){
    console.log(ownerName + ' '   +"My car is" + ' ' +this.brand + " "  +"year" + this.model)
}
}

var carDetails = car.carInfo.bind(car, "Vivian"); 

carDetails();


///for in & for of:

const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (const index in digits) {
  console.log(index);
}

const digits1 = [9, 8, 7, 6, 5, 5, 6, 7, 8, 9];

for (const digit of digits1) {
  console.log(digit);
}

//show the values greater than 18;
const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 },
    { name: "Emma", age: 24 }
  ];

  person.forEach(person =>{
    if(person.age>18){
         console.log(`{person.name},{person.age}`)
    }
  })


// find even in aray
let arr = [1,2,3,4,5,3,5,6,7,8];

let even = arr.filter(number => number % 2 === 0);
console.log(even);