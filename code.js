
//closer => inner function access outer variable
function outer(){
    var outerValue = "Im working";
    
    function inner(){
    console.log(outerValue);
    }
    return inner();
    }
    outer();

// boolean output
var bar = true;
console.log(bar + 0);    0
console.log(bar + "xyz");  xyz
console.log(bar + true);   2
console.log(bar + false);  1

//what is the output
let user = {

  show() {
    console.log(arguments)
  },
}
user.show(1, 2, 3);    

//outoput: 0: 1,
// 1: 2,
// 2: 3

//what is the output
var a = 10;
 
function sum(b = 7){
return a + b;
}

console.log(sum()); 








    













