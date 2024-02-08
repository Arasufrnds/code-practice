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


