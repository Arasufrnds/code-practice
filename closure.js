//1. Access its own scope:
var add = function(passed){
    var inner = 2;
    return inner + passed;
    }
    console.log(add(4));

//2. Access the global scope
var passed = 8
var add = function(){
var inner = 2;
return inner + passed;
}
console.log(add());

//3.it can access its outer function variable
var add = function(outer){
    var addTo = function(inner){
      return inner + outer;
    }
    return addTo;
  }
  
  var addThree = add(3); // This creates a function that adds 3 to its argument
  var addFour = add(4); // This creates a function that adds 4 to its argument
  
  console.log(addThree(1)); // This will log 4 because 1 + 3 = 4
  console.log(addFour(4));


  
//closer => inner function access outer variable
function outer(){
    var outerValue = "Im working";
    
    function inner(){
    console.log(outerValue);
    }
    return inner();
    }
    outer();

    //closure of add and multiply:
    function mul(a) {
      return function(b) {
        return function(c) {
          return a + b + c;
        };
      };
    }
    
    console.log(mul(2)(3)(4));

//create function to do the same to get output 16
function createBase(value){
  return function(n){
   return value + n;
  }
 }
 
 var addSix = createBase(6);
 console.log(addSix(10));