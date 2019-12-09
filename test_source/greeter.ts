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

let o = {
  a: "foo",
  b: 12,
  c: "bar"
};


function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a = 1, b = 1001 } = wholeObject;
  return `${a}그리고${b}`;
}
