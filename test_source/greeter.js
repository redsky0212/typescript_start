var Student = /** @class */ (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    Student.prototype.inner = function () {
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.middleinitial + "" + person.lastname;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var users = [
    { name: 'kim', height: 176, favoriteLanguage: 'TypeScript' },
    { name: 'lee', height: 42 }
];
var nameHeightMap = {
    key: 111,
    x: 222,
    1: '333'
};
users.map(function (user) {
    nameHeightMap[user.name] = user.height;
});
console.log(nameHeightMap); // { '안희종': 176, 'Stranger': 42 }
var aa = ['aaa', 'bbb'];
console.log(aa[1]);
