class Student {
  fullname : string;
  constructor(public firstname, public middleinitial, public lastname) {
    this.fullname = firstname + " " + middleinitial + " " + lastname;
  }

  inner(){
    
  }
}

interface Person {
  firstname: string;
  lastname: string;
  middleinitial: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstname + " " + person.middleinitial + "" + person.lastname;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user); 

function identity<T>(arg: number): number {
  return arg;
}
console.log(identity(1));