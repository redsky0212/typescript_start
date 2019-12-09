# TypeScript 처음 시작하기
## 참고문서
* 공식문서 : https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
* 유투브react-TypeScript : https://www.youtube.com/watch?v=PFBRhxjIBUM&list=PLV6pYUAZ-ZoHx0OjUduzaFSZ4_cUqXLm0

## TypeScript 초기설정
* Nodejs 설치
* VSCode설치(Editor)
* npm i -g typescript : 글로벌로 typescript를 설치
* tsc 명령어로 compile
  - 프로젝트 폴더에 greeter.ts파일을 만든다.
  - 간단한 TypeScript코딩을 하고 tsc greeter.ts 명령어 실행하면 greeter.js 파일이 생성됨.
  - 프로젝트 폴더에 index.html 파일을 만들고 컴파일결과 js파일을 로딩해서 확인한다.

## TypeScript 사용하기
* 타입주석(type annotations) 사용하기
  - 인자값에 type을 정할 수 있다. ( 인자 : string )
```
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```
  - interface 를 통하여 객체에 세부 타입을 지정할 수 있다.
```
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);
```
* class를 생성자와 함께 생성하기
  - class내부 생성자에서 인자값에 public사용하면 해당class의 속성으로 자동으로 만들어준다.
    - 그러면 추 후 ( class인스턴스.속성 ) 이런식으로 사용할 수 있다.
    - class속성에는 있으나 interface에 정의된 type에 없으면 에러난다.
```
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```

## 기본 Type의 종류
* Boolean : true | false 값을 가질 수 있는 유형.
  - Boolean : let isDone: boolean = false;
* Number : 부동 소수점, 16진수, 10진수, 2진수, 8진수.
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
* String : 따옴표로 묶어서 사용되고, 템플릿문자열을 백따옴표(`)를 사용할 수도 있다.
```
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;
```
* Array : 배열타입
  - 두가지 방법으로 사용할 수 있다.
```
// 첫번째는 타입지정함과 동시에 뒤에 [] 를 붙이는 방식.
let list: number[] = [1, 2, 3];
// 두번째는 일반적인 배열 유형 Array<elemType> 사용.
let list: Array<number> = [1, 2, 3];
```
* Tuple 타입 : 배열 요소의 각각의 타입을 지정할 수 있다.
  - 타입이 정해진 각각의 배열 요소에 해당하는 속성을 사용할 수 있습니다.
  - 해당 타입에 해당하는 요소가 아닌 경우 에러를 발생한다.
```
// tuple 형식 선언
let x: [string, number];
// 초기화
x = ["hello", 10]; // OK
// 잘못된 초기화
x = [10, "hello"]; // Error

// 배열요소의 속성 사용시
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

// 정해진 요소가 아닌곳에 값을 바인딩하면 에러 발생.
x[3] = 'world';
console.log(x[5].toString());
```

* Enum : 열거형(숫자값 집합), 열거형의 시작은 0 부터 시작한다.
  - 요소중 값을 수동으로 변경 가능 합니다.
  - 요소의 숫자값으로 해당값에 맵핑된 이름을 가져올 수도 있습니다.
```
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

// Enum요소의 값 변경.
enum Test {a, b=3, c};
let s: Test = Test.b;
console.log(s);

// Enum요소에 바인딩된 숫자값으로 해당요소 이름을 알 수 있습니다.
enum Test2 {name1, name2, name3};
let s2: string = Test2[1];
console.log(s2);
```

* Any : 모든유형.
  - 일반 javascript와 같이 여러가지 유형을 사용할 수 있습니다.
  - 배열에도 Any 유형을 가지는 배열타입을 지정할 수 있습니다.
```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// 여러가지 유형을 사용.
let list: any[] = [1, true, 'free'];
list[1] = 100;
```

* Void : void는 any와 반대. 어떤유형도 아닌것. 값을 반환하지 않는것.
```
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given
```

* Null and Undefined : TypeScript에서는 null, undefined는 각각 null, underfined라는 타입을 갖습니다.
* Never : 절대 true가 반환되지 않는 경우의 타입입니다. 예를들어 항상 예외를 발생하는함수,
```
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}
``` 

* Object : object에 type을 지정하는 형태. interface에서도 사용함.
```
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

* Type assertions : 형변환이 아님. 컴파일러에게 "나는 이런타입이다" 라고 명시해주는것.
  - 명시해주는 방법은 두가지가 있다.
    - 첫번째 : 변수 as 타입
    ```
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    ```
    - 두번째 : <타입>변수
    ```
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    ```
