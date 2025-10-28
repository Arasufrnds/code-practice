 //find the occurance
 function occurance(str){
    let exists = {}
    
    for(let i=0; i<str.length; i++){
        if(exists[str[i]]){
            exists[str[i]]+=1;
        }else{
            exists[str[i]]=1;
        }
    }
    
    for(let item in exists){
        console.log("occurences of "+item+" is :"+exists[item])
    }
}

occurance("malayalam")

//palidrome
let occurance="malam"
  let value = occurance.split('').reverse().join(' ');
   
if(occurance === value){
    console.log(`${occurance} is palidrome`)
}else{
    console.log(`${occurance} is not palidrome`)
}


//change the reverse but position not change
let str = "how are you";
let reverseWords= str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

console.log(reverseWords);  //o/p: "woh era uoy"

//total reverse
let wish = "how are you";

function reverse(str) {
    let value = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        value += str[i];
    }

    return value;
}

console.log(reverse(wish));  // Output: "uoy era woh"