
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








    













