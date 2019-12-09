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
console.log(a);

enum Test2 {name1, name2, name3};
let s2: string = Test2[1];
console.log(s2);

let list: any[] = [1, true, 'free'];
list[1] = 100;
console.log(list);



function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}
//fail();
function infiniteLoop(): never {
  while (true) {
  }
}


