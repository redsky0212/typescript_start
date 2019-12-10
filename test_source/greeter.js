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
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var newName1 = o.a, newName2 = o.b;
console.log(newName1);
