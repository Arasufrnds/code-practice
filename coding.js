const a = {  
    "employee": [  
        {  
            "name": "John",   
            "salary": 56000,   
            "married": "single",
            "region": "uas",
        },{  
            "name": "Vishal",   
            "salary": 10000,   
            "married": true,
            "region":  "uk", 
        },{  
            "name": "Smith",   
            "salary": 500000,   
            "married": "married",
            "region":"sa", 
        },
        ,{  
          "name": "Smitha",   
          "salary": 500000,   
          "married": "married",
          "region":"sa", 
      }
    ]  
};

//add the value of dollar for the region UK
a.employee.forEach(employee => {
    if (employee.region === "uk") {
        employee.currency = "dollar";
    }
});

console.log(a);

//change the value to married to unmarried to vishal
a.employee.forEach(employee => {
    if (employee.name === "Vishal") {
        employee.married = false;
    }
});

console.log(a);

//rempve the value of married from vishal
a.employee.forEach(employee => {
    if (employee.name === "Vishal") {
        delete employee.married;
    }
});

console.log(a);

//delete the particular value like region in whole list
a.employee.forEach(employee => {
  delete employee.region;
});

console.log(a);

//show the people of single in this list
a.employee.forEach(employee => {
    console.log(`${employee.name}: ${employee.married ? 'Married' : 'Single'}`);
});


// Removing married employees
a.employee = a.employee.filter(employee => employee.married !== "married");

console.log(a);




  //add the value of id to the value male in status
  let arr = [
    {
      "name": "qwerty",
      "status": "female"
    },
    {
      "name": "xyz",
      "status": "male"
    },
    {
      "name": "poi",
      "status": "female"
    },
    {
      "name": "abc",
      "status": "male"
    },
    {
      "name": "def",
      "status": "female"
    },
    {
      "name": "ghi",
      "status": "male"
    },
    {
      "name": "ask",
      "status": "female"
    },
    {
      "name": "lop",
      "status": "male"
    }
  ];
  
  //remove the status of married in the list
  arr.forEach(item => {
    delete item.status;
});

console.log(arr);

//adding new value of salary 
arr.forEach(item => {
  item.salary = 1000;
});

console.log(arr);

//add the value of address for the name 'ask';
arr.forEach(item => {
  if (item.name === "ask") {
      item.address = "newyork";
  }
});

console.log(arr);

  //method 2:
  arr.forEach(item =>{
    if(item.status === "male"){
       item.id = 10;
    }
    });
    
    console.log(arr);

//modify the value of male to LGBT on status
arr.forEach(item => {
  if (item.status === "male") {
    item.status = "LGBT";
  }
});

console.log(arr);

//show the status of male and their name;
let males = arr.filter(person => person.status === "male");

// Log name and status of each male
males.forEach(male => {
  console.log(`Name: ${male.name}, Status: ${male.status}`);
});


//remove the hidden from the value
let value = [{name: "arasu", hidden: true}, 
             {name: "deepak"},                             
             {name: "gopi"}];

let fvalues=value.filter(obj => !obj.hidden);

console.log(fvalues);

//2nd method:
let value1 = [{name: "arasu", hidden: true}, 
              {name: "deepak"}, 
              {name: "gopi"}];

let fvalues1=value.filter(obj => !obj.hidden === true);

console.log(fvalues1);


//adding two different values;
function add(a, b) {
  if (typeof b !== 'undefined') {
    return a + b;
  } else {
    return function(b) {
      return a + b;
    };
  }
}

// Usage
console.log(add(2, 3)); // Direct use
console.log(add(2)(3));
