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