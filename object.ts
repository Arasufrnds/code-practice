/// create a class & add the employee name (constructor method);

class Employee {
    name: string;
    id: Number;

    constructor(name:string, id:number){
        this.name = name;
        this.id = id;
    }

    display() {
        console.log(`{this.name}, {this.id}`);
    }
}

let employee1 = new Employee ('ara',10);
employee1 . display();




//Typescript concept:
//static method:
class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(5, 3)); // Output: 8
console.log(Calculator.subtract(10, 6));

//creating class of student and fetch result:
class student{
    marks : number = 80;

    getResult():string{
        if(this.marks > 40){
            return "pass";
        }else{
            return "fail";
        }
    }
}

var result = new student;
console.log(result.getResult());



//crate a pipe to reverse the string in angular:
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.split('').reverse().join('') : '';
  }
}


<div>
  <label for="inputText">Enter Text:</label>
  <input id="inputText" [(ngModel)]="text" type="text" />
  <p>Reversed: {{ text | reverseString }}</p>
</div>



