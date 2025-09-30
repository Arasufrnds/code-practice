//need to show the selected false name only
let arr = [{
	name : "Aishwarya",
	selected: true
}, 
{
	name : "test1",
	selected: false
}, {
	name : "test2",
	selected: true
}, {
	name : "test3",
	selected: false
}, 
]

//using foEach to fetch selsected name only
let value = [];
arr.forEach((arr)=>{
    if(arr.selected == false){
        value.push(arr.name);
    }
})
console.log(value);

//same case above but using both filter and map
let values = arr.filter(emp=>emp.selected === true).map(emp=>emp.name);
console.log(values);

// find even in aray (filter method)
let array = [1,2,3,4,5,3,5,6,7,8];

let even = array.filter(number => number % 2 === 0);
console.log(even);



//multiple by two
let chars1 = [1,2,2,3,4,5,5,6,7];
let doubledChars = chars1.map(number => number * 2);

console.log(doubledChars);


//find above 18 
let age = [2,43,12,23,45]
age.forEach(person=>{
    if(person > 18){
        console.log(person)
    }
})



//handle higher order function in nested objects
const data = {
  users: [
    { name: "Alice", age: 25, hobbies: ["reading", "cycling"] },
    { name: "Bob", age: 30, hobbies: ["gaming", "hiking"] },
    { name: "Charlie", age: 22, hobbies: ["swimming"] }
  ]
};

//to extract name, age & hobbies using map method
let value = data.users.map(emp=>emp.name);
console.log(value)

//using flatMap take all values of hobbies in single array
let value = data.users.flatMap(emp=>emp.hobbies);
console.log(value)

//getting the value of the user having hobby as cycling

let value = [];
data.users.forEach((user) =>{
    if(user.hobbies.includes("cycling")){
        value.push(user.name);
    }
})

console.log(value);

//if the user not having nested array then use == if its nested so use includes
let value = [];
data.users.forEach((arr)=>{
    if(arr.age == "25"){
        value.push(arr.name);
    }
})
console.log(value);

//using filter & map instead of foreach
let value = data.users.filter(emp=>emp.hobbies.includes("cycling")).map(emp=>emp.name);
console.log(value);