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
  - Number : let decimal = 6;
* String : 
  - String : let color: string = 'blue';
  - Array : let list: number[] = [1,2,3]; or let list: Array&lt;number&gt; = [1,2,3];
  - Tuple : let x: [string, number];