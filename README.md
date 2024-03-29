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
let s: Test = Test.b; // 열거형의 숫자값 가져오기
console.log(s);

// Enum요소에 바인딩된 숫자값으로 해당요소 이름을 알 수 있습니다.
enum Test2 {name1, name2, name3};
let s2: string = Test2[1];  // 열거형의 이름 가져오기
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
```
let u: undefined = undefined;
let n: null = null;
```
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
  - declare는 현재 파일이 아닌 다른..., 전역, 에 선언되어있다고 컴파일러에게 알려주는 때 사용.
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

## TypeScript에서 다양한 변수 선언방법
* 변수 선언시 var와 let의 차이.( 일반 javascript와 같음 )
  - 가장 큰 차이는 Block-scoped.
  - let은 선언하기 전에는 사용되어지면 안됨.
* let와 const의 차이.( 일반 javascript와 같음 )
  - 수정하기 위한 변수 외에는 모두 const를 사용.
* 배열 분해 할당
  - 우선 가장 심플한 배열 분해 할당(first, second라는 변수로 배열을 분해하여 할당했다.)
  ```
  let input = [1,2];
  // first = input[0]; 이런 형식과 같은 코드 이지만 아래 코드가 훨씬 편리함.
  let [first, second] = input;

  // 함수 파라미터로도 사용될 수 있습니다.
  function f([first, second]  :[number, number]){
    console.log(first);
    console.log(second);
  }
  f([1,2]);

  // '...'연산자를 이용하여 나머지 배열을 합쳐서 배열분해 변수 선언을 할 수도 있습니다.
  let [first, ...rest] = [1, 2, 3, 4];
  console.log(first); // outputs 1
  console.log(rest); // outputs [ 2, 3, 4 ]

  // 배열 요소 하나만 가져올 수 있다.
  let [first] = [1,2,3,4];

  // 배열의 원하는 인덱스 위치의 값을 가져오고 싶을때.
  let [,,bbb,ccc] = [11,22,33,44];
  ```
* Tuple 분해 할당
  ```
  // Tuple타입의 배열 요소
  let tuple: [number, string, boolean] = [7, "hello", true];
  let [a, b, c] = tuple; // a: number, b: string, c: boolean

  // 정해진 Tuple타입의 요소를 벗어날 경우에는 에러가 발생된다.
  let [a, b, c, d] = tuple; // d 에러발생.

  // '...'연산자를 이용한 Tuple타입 사용예제
  let [a, ...bc] = tuple; // bc: [string, boolean]
  let [a, b, c, ...d] = tuple; // d: [], the empty tuple

  // 배열 요소 하나만 가져올 수 있다.
  let [first] = tuple;

  // 배열의 원하는 인덱스 위치의 값을 가져오고 싶을때.
  let [,,bbb] = tuple;
  ```

* Object 분해 할당
```
// 일반적인 객체 분해 할당.
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

// 선언하지 않고 바로 할당한 값을 바로 분해가져오기
let { a, b } = { a: "baz", b: 101 };

// '...'연산자를 이용하여 나머지 값들을 모두 모아서 변수로 지정할 수 있습니다.
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

// 객체 안에서 구조분해 ':'뒤에는 새로운 이름을 할당하는것임.
// 타입 지정하는것과 혼동하면 안됨.
let { a: newName1, b: newName2 } = o;

// 객체에 타입을 지정하고자 할때는 각각의 요소에 별도로 지정 해줘야 한다.
let {a,b} : {a:string, b:number} = o;

// 함수 파라미터에 기본값을 지정할 수 있다.
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
```

* Function 분해 할당
```
// 함수의 파라미터 부분에 적용.
type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}
```

* Spread 연산자 '...'
  - 구조분해와 반대
  ```
  let first = [1, 2];
  let second = [3, 4];
  let bothPlus = [0, ...first, ...second, 5];
  ```
  - 같은 요소가 있을경우 마지막 요소가 최종 값이 됨.
  ```
  // search.food값은 'rich'가 됨.
  let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
  let search = { ...defaults, food: "rich" };
  ```
  - 객체를 '...'를 이용하여 펼칠때는 class의 인스턴스 내부의 매서드는 소실된다.
  ```
  class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  clone.m(); // error!
  ```

## Interface 관련.
* 일반적인 TypeScript 코딩방법 과 Interface를 이용한 코딩방법 예제.
```
// 일반적인 방법
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// Interface로 코딩한 방법
interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
* Optional Properties
  - 값이 있어도 되고 없어도 되는 옵션값을 지정할때 '?'로 사용한다.
  ```
  interface SquareConfig {
      color?: string;
      width?: number;
  }

  function createSquare(config: SquareConfig): {color: string; area: number} {
      let newSquare = {color: "white", area: 100};
      if (config.color) {
          newSquare.color = config.color;
      }
      if (config.width) {
          newSquare.area = config.width * config.width;
      }
      return newSquare;
  }

  let mySquare = createSquare({color: "black"});
  ```
* Readonly properties
  - 처음 생성할때 값 할당하고 이후에는 값을 수정할 수 없게 처리하기 위하여 readonly를 **속성 이름 앞에** 적어 줍니다.
  ```
  interface Point {
      readonly x: number;
      readonly y: number;
  }
  // interface를 선언하고 값을 할당 하려고 하면 에러가 발생한다.
  let p1: Point = { x: 10, y: 20 };
  p1.x = 5; // error!
  ```
  - **ReadonlyArray<타입>** 배열에 readonly적용하기.
    - 미리지정된 배열을 새로운 변수에 할당할때 변경이 이루어지지 않게 지정하는 방법.
    ```
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    ro[0] = 12; // error!
    ro.push(5); // error!
    ro.length = 100; // error!
    a = ro; // error!
    ```
    - ReadonlyArray를 이용하여 수정할 수 없게 되었지만 새로운 변수에 Type assertion을 이용하여 새롭게 타입을 지정하여 사용할 수도 있다.
    ```
    let other = ro as number[];
    ```
    - readonly, const (둘다 값변경 불가용으로 사용하므로)
      - 변수는 const를 사용하고, 속성에는 readonly를 사용한다.

* 추가 속성 체크 (Excess Property Checks)
  - 일반적으로 아래 코드는 'colour'이 없다고 에러가 납니다.
  ```
  interface SquareConfig {
      color?: string;
      width?: number;
  }

  function createSquare(config: SquareConfig) {
      // ...
  }

  let mySquare = createSquare({ colour: "red", width: 100 });
  ```
  - 하지만 color, width 외에 추가적인 속성이 더 있다고 가정하고 코드를 작성할때는 아래와 같이 두가지 방법으로 할 수 있습니다.
    - interface에 추가적으로 아래와같이 propName을 설정하고 any타입을 적용하는 방법.
    - 또다른 방법은 인자값 넘겨줄때 SquareConfig타입으로 형변환 해주는 방법.
  ```
  interface SquareConfig {
      color?: string;
      width?: number;
      [propName:string] : any;  // 넘겨진 color, width이외의 속성을 가질 수 있게 처리.
  }

  function createSquare(config: SquareConfig) {
      // ...
  }

  // type assertion(타입 설정)을 통하여 에러를 없앨 수 있다.
  let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
  ```
  - **주의** 
    - 아래와 같이 전혀 다른 속성 하나만 사용하는데에 위와같은 초과속성체크를 사용해서는 안됨.(특별히 예외 사항일때만 사용하는게 좋음.)
  ```
  let squareOptions = { colour: "red" };
  let mySquare = createSquare(squareOptions);
  ```
* 함수 타입 지정
  - 함수의 매개변수, 반환값의 타입을 interface로 지정할 수 있다.
  ```
  // 함수에 타입 지정 시 매개변수부분과 리턴값부분으로 나눠서 아래와 같이 타입을 지정할 수 있습니다.
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  }
  ```
  - 매개변수의 이름이 같지 않아도 된다.
  ```
  let mySearch: SearchFunc;
  mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  }
  ```
  - interface에 지정된 타입이 설정 되었다면 함수에서 타입을 지정하지 않아도 어떤 타입인지 유추가 됩니다.
  ```
  let mySearch: SearchFunc;
  mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
  }
  ```
* Indexable 타입(색인 가능 타입 정의)
  - interface를 이용하여 값 인덱스를 숫자 또는 문자로 결과타입에 맞는 값을 구할 수 있는 것.
  - **number, string** 두가지 타입만 가능.
  - aaa[0] : 숫자형인덱싱, aaa['test'] : 문자형 인덱싱.
  - 상속관계일때 숫자인덱싱은 문자 인텍싱의 하위여야한다.
  ```
  const users:any  = [
    { name: 'kim', height: 176, favoriteLanguage: 'TypeScript' },
    { name: 'lee', height: 42 }
  ];
  interface NameHeightMap { // 문자인덱싱을 적용하고 다른index에는 다른값타입을 적용할때는 string | number 이렇게 한다.
    [username:string] : string | number;
    [i:number]:string;
    x:number;   // 이렇게 명시적으로 꼭 나와야하는 index'x'를 정하여 타입을 셋팅할 수도있다.
  }
  const nameHeightMap: NameHeightMap = {
    key:111,
    x:222,
    1:'333'
  };
  users.map(user => {
    nameHeightMap[user.name] = user.height;
  });
  console.log(nameHeightMap);
  console.log(nameHeightMap['key']);  // 111
  console.log(nameHeightMap[1]);      // '333'

  interface aaInter { // 배열에 사용시에는 거의 index:number로 정해지고 값의 타입은 여러가지 셋팅할 수 있다
    [index:number]: string;
  }
  let aa : aaInter = ['aaa', 'bbb'];
  console.log(aa[1]);
  ```

* Class 타입
  - class에도 타입을 적용할 수 있다.
    - class 클래스명 implements 타입명 {} 이런식으로 셋팅해준다.
  - Interface 구현
    - class에 들어갈 속성, 메서드들을 타입을정하여 셋팅한다.
    ```
    interface ClockInterface {
      currentTime: Date;
      setTime(d: Date): void;
    }

    class Clock implements ClockInterface {
      currentTime: Date = new Date();
      setTime(d: Date) {
          this.currentTime = d;
      }
      constructor(h: number, m: number) { }
    }
    ```
  - class에 인터페이스 타입을 적용할때와 인스턴스에 인터페이스 타입을 적용할때의 구분이 명확해야한다.
  ```
  interface ClockConstructor {  // class의 인스턴스 인터페이스 
    new (hour: number, minute: number);
  }
  interface ClockInterface {  // class의 인터페이스 (property, method등을 명시한다.)
    tick();
  }

  const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
  }
  ```
* Interface의 확장
  - 클래스와 같이 interface도 확장하여 사용할 수 있다.
  ```
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }

  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;

  interface PenStroke {
    penWidth: number;
  }

  // 이렇게 추가로 조합을 할 수도 있다.
  interface Square extends Shape, PenStroke {
    sideLength: number;
  }
  ```
* Interface의 유연한 사용.
  - interface를 유연하게 사용 할 수 있습니다.
  ```
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;
  ```
* 상속된 class의 상위 멤버는 interface가 적용되지 않는다.
  - 여러단계로 상속된 class구조에서 현재 class에만 interface의 타입을 적용하고자 할때 유용함.
  ```
  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select(): void;
  }

  class Button extends Control implements SelectableControl {
    select() { }
  }

  class TextBox extends Control {
    select() { }
  }
  ```

## Class 
* 일반적인 class에 타입사용법
```
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```
* class 상속
```
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```
* 좀 더 복잡한 상속 class
```
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }  // 생성자에서 상위 super를 꼭 호출해줘야한다.
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
* Public, private, and protected modifiers
  - 기본은 public
  - private
    - 선언한 class 외부에서는 접근하지 못함.
    ```
    class Animal {
      private name: string;
      constructor(theName: string) { this.name = theName; }
    }

    new Animal("Cat").name; // Error: 'name' is private;
    ```
    - class 내부 private가 있을때 class간 상속 호환이 없으면 접근하지 못함.
  - protected
    - 서로 상속된 class내에서는 서로 접근이 가능한 속성. 그 외에는 private와 같음.
    ```
    class Person {
      protected name: string;
      constructor(name: string) { this.name = name; }
    }

    class Employee extends Person {
      private department: string;

      constructor(name: string, department: string) {
        super(name);
        this.department = department;
      }

      public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
      }
    }

    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    console.log(howard.name); // error
    ```
    - class의 생성자가 protected이면 외부에서 new 클래스명 과 같이 인스턴스화 할 수 없다. 단 상속만 가능하다.
* Readonly 사용
  - class내부 속성에 readonly를 사용하여 값 초기화 후 추가셋팅을 할 수 없게 막을 수 있다.
  ```
  class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
      this.name = theName;
    }
  }
  let dad = new Octopus("Man with the 8 strong legs");
  dad.name = "Man with the 3-piece suit"; // error! name is readonly.
  ```
  - 기존 name속성을 삭제하고 생성자 파라미터에서 바로 선언하고 셋팅을 한번에 할 수도 있습니다.
    - 참고로 readonly말고도 public, protected 다 가능합니다.
  ```
  class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
  }
  ```
* class에서 get, set사용
  - class에서 속성을 무작위로 접근하면 위험성이 따르므로 속성 자체에는 직접 접근하지 못하게 하고 getter, setter를 통하여 접근하게 하면 
  추후 추가적인 작업?(파라미터에 대한 에러처리 등) 도 처리할 수도있고 훨씬 안정적으로 코딩이 가능하다.
  ```
  const fullNameMaxLength = 10;

  class Employee {
      private _fullName: string;

      get fullName(): string {
          return this._fullName;
      }

      set fullName(newName: string) {
          if (newName && newName.length > fullNameMaxLength) {
              throw new Error("fullName has a max length of " + fullNameMaxLength);
          }
          
          this._fullName = newName;
      }
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
      console.log(employee.fullName);
  }
  ```
* Static 속성
  - class에서 인스턴스를 생성하지 않고도 class의 속성에 바로 접근 가능한 속성.
  - 속성앞에 static을 붙인다.

* 추상클래스 (Abstract)
  - 인스턴스화 할 수 없다.
  - abstract클래스의 메서드 또한 추상화 할 수도 있고 안할 수도 있다. 추상메서드 지정시 로직을 담지 않고 선언하고 타입만 지정한다. 구현은 하위 파생된 class에서 한다.
  ```
  abstract class Department {
      constructor(public name: string) {
      }

      printName(): void {
          console.log("Department name: " + this.name);
      }

      abstract printMeeting(): void; // must be implemented in derived classes
  }

  class AccountingDepartment extends Department {

      constructor() {
          super("Accounting and Auditing"); // constructors in derived classes must call super()
      }

      printMeeting(): void {
          console.log("The Accounting Department meets each Monday at 10am.");
      }

      generateReports(): void {
          console.log("Generating accounting reports...");
      }
  }

  let department: Department; // ok to create a reference to an abstract type
  department = new Department(); // error: cannot create an instance of an abstract class
  department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
  department.printName();
  department.printMeeting();
  department.generateReports(); // error: method doesn't exist on declared abstract type
  ```
## Function
* 일반적인 javascript, TypeScript공신문서 Functions : (https://www.typescriptlang.org/docs/handbook/functions.html)

## Generics
* 일반적인 타입캡쳐
  - 입력한 인수 타입과 매개변수와 리턴값을 맞출때 유용함.
  - 매개변수를 any타입으로 하면 리턴값은 넘어온 매개변수 타입과 맞출 수 없다. 타입이 동적이기 때문.
  - 사용예
  ```
  function identity<T>(arg: T): T {
    return arg;
  }
  ```
  - identity함수를 사용할때 string으로 명시해서 사용할 수 있습니다.
  ```
  let output = identity<string>("myString");
  ```
  - 아니면 넘겨진 인자가 어떤 타입이냐에 따라 그 타입을 자동으로 따라가게끔 되게 처리합니다.
  ```
  let output = identity("myString");
  ```
  - 함수 내부에서 넘어온 매개변수의 메서드를 사용하고자 할때 number인지 string인지 등 정해지지 않았기 때문에 인자.length와 같은 메서
  드는 사용할 수 없습니다. 그래서 인자뒤에 T[] 또는 Array&lt;T&gt; 와 같이 넣어서 사용할 수 있습니다.
  ```
  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
  }
  function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
  }
  ```
## Enum
## Symbol
## Namespace
## Decorator
## Mixin

