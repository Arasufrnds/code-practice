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