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

enum Color {Red, Green, Blue};
let c: Color = Color.Green;

console.log(c);

enum test {a, b=3, c=2};
let a: test = test.b;
let c: string = test[2];
console.log(a);
console.log(c);