# TypeScript 처음 시작하기
## 유투브 강좌
* https://www.youtube.com/watch?v=PFBRhxjIBUM&list=PLV6pYUAZ-ZoHx0OjUduzaFSZ4_cUqXLm0
* 인프런 강좌 : https://www.inflearn.com/course/Typescript_Vue/lecture/21109

## TypeScript 설정
* Nodejs 설치
* VSCode설치
* npm i -g typescript : 글로벌로 typescript를 설치
* tsc greeter.ts 명령어 실행하면 greeter.js 파일이 생성됨.

## TypeScript 사용하기
* 타입주석(type annotations) 사용하기
  - 인자값에 type을 정할 수 있다. ( 인자 : string )
  - 함수나 변수에 사용할때는 type을 정할 수 있다.
  - interface 를 통하여 객체에 세부 타입을 지정할 수 있다.
* class를 생성자와 함께 생성하기
  - 인자값에 public사용은 class의 프로퍼티로 자동적으로 만들어 준다.
* 기본 Type의 종류
  - Boolean : let isDone: boolean = false;
  - Number : let decimal = 6;
  - String : let color: string = 'blue';
  - Array : let list: number[] = [1,2,3]; or let list: Array&lt;number&gt; = [1,2,3];
  - Tuple : let x: [string, number];