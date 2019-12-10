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

const users:any  = [
  { name: 'kim', height: 176, favoriteLanguage: 'TypeScript' },
  { name: 'lee', height: 42 }
];
interface NameHeightMap {
  [username:string] : string | number;
  [i:number]:string;
}
const nameHeightMap: NameHeightMap = {
  key:111,
  x:222,
  1:'333'
};
users.map(user => {
  nameHeightMap[user.name] = user.height;
});
console.log(nameHeightMap) // { '안희종': 176, 'Stranger': 42 }

interface aaInter {
  [index:number]: string;
}
let aa : aaInter = ['aaa', 'bbb'];
console.log(aa[1]);
