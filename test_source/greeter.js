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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var test;
(function (test) {
    test[test["a"] = 0] = "a";
    test[test["b"] = 3] = "b";
    test[test["c"] = 2] = "c";
})(test || (test = {}));
;
var a = test.b;
console.log(a);
var Test2;
(function (Test2) {
    Test2[Test2["name1"] = 0] = "name1";
    Test2[Test2["name2"] = 1] = "name2";
    Test2[Test2["name3"] = 2] = "name3";
})(Test2 || (Test2 = {}));
;
var s2 = Test2[1];
console.log(s2);
var list = [1, true, 'free'];
list[1] = 100;
console.log(list);
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
//fail();
function infiniteLoop() {
    while (true) {
    }
}
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
var _a = [11, 22, 33, 44], bbb = _a[2], ccc = _a[3];
console.log(bbb);
