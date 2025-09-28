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