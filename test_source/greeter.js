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
function keepWholeObject(wholeObject) {
    var _a = wholeObject.a, a = _a === void 0 ? 1 : _a, _b = wholeObject.b, b = _b === void 0 ? 1001 : _b;
    return a + "\uADF8\uB9AC\uACE0" + b;
}
