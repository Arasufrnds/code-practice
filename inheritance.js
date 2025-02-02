//Inheritance
class Employe{
    constructor(name, id){
     this.name =name;
     this.id =id;
    }
  
    display(){
      console.log(`Im working ${this.name} & ${this.id} and ${this.salary}`)
    }
  }
  
  class supervisor extends Employe{
    constructor(salary, name, id){
      super(name, id);
      this.salary = salary;
    }
  }
  
  let value = new supervisor(5000, "walter", 15);
  value.display();


  //3types of functions in js:
  function greet(name){                 //normal function or named function
    console.log("hello")
}
greet();

(function(){                               //IIFE function
    console.log("working")
})()

const work = function(){                   //variable function
    console.log("var function")
}
work();


//interface:

interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const student: Person = new Student('John', 25);
student.greet();