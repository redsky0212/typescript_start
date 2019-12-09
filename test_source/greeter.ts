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

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string] : any;
}

function createSquare(config: SquareConfig) {
  alert(config.colour);
}

let mySquare = createSquare({ colour: "red", width: 100, aa:20 } as SquareConfig );