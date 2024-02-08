//show the values greater than 18;
const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 },
    { name: "Emma", age: 24 }
  ];

  people.forEach(person =>{
    if(person.age > 18){
        console.log(`${person.name},${person.age}`);
    }
  })

//show the value of name alone in object (map method)
const a = {  
    "employee": [  
        {  
            "name": "John",   
            "salary": 56000,   
            "married": true  
        },{  
            "name": "Vishal",   
            "salary": 10000,   
            "married": true  
        },{  
            "name": "Smith",   
            "salary": 500000,   
            "married": true  
        }
    ]  
};


const employeeNames = a.employee.map(employee => employee.name);
console.log(employeeNames);

//find the Duplicate in object
const value =[
    {id:1, name:"count"},
    {id:1, name:"count1"},
    {id:1, name:"count2"},
    {id:1, name:"count"},
    {id:1, name:"count"},
];

let same = Array.from(new Map(value.map((m)=> [m.name, m])).values());
console.log(same);

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


