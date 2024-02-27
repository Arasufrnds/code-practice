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