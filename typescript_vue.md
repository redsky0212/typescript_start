# 인프런 Vue-TypeScript : https://www.inflearn.com/course/Typescript_Vue/lecture/21109
## TypeScript 를 Vue Component에 적용하는 두가지 방법
* Vue.extend 를 이용하여 객체로 만드는 방법.(결론: TypeScript와 좋은 조합이 아니다.)
* Class로 만드는 방법.

## Vue에서 Class방식으로 TypeScript사용시 문제점
* 맵핑헬퍼 사용시 문제점

## TypeScript 공식문서
* https://www.typescriptlang.org/docs/handbook/decorators.html

## Vue.js 프로젝트에 Typescript 를 적용할 때 크게 도움이 되었던 사이트들을 기록을 위해 정리해 둔다.
  - Vue.js 공식 사이트: https://vuejs.org/v2/guide/typescript.html
  - Vue-cli 로 기존 프로젝트에 Typescript 적용하기: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript
  - vue-class-component: https://github.com/vuejs/vue-class-component
  - vue-property-decorator: https://github.com/kaorun343/vue-property-decorator
  - vuex-class: https://github.com/ktsn/vuex-class

## TypeScript로 Vue 프로젝트 구성 (https://joshua1988.github.io/vue-camp/ts/with-vue.html#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
* 테스트해본 소스는 여기:(https://github.com/redsky0212/vue-ts-test-firstsource)
* Nodejs 설치
* Vue CLI 설치
  - npm i -g @vue/cli : cli 설치 (참고 : 이전 버전 vue cli 지우기 : npm uninstall vue-cli -g)
  - vue --version :  설치여부 및 버전정보 체크.
* Vue CLI 로 프로젝트 생성
  - vue create 프로젝트명  
  - TypeScript를 써야하는경우 preset선택 부분에서 Manually select features를 선택.
  - 기본 설치 선택부분에서 Babel체크빼기, TypeScript선택, Router와Vuex선택, Linter선택.
  - class-style component 는 선택을 한다.
  - Babel과 함께 사용할꺼냐? 해도되고 안해도 된다. 여기서는 default No.
  - router에서 history를 사용? Y.
  - TSLint를 선택 (TypeScript를 사용할꺼므로.)
  - Lint 추가 설정은 default.
  - TypeScript나 Lint설정을 따로 파일로 둘꺼냐 아니면 package.json에 같이 둘꺼냐 물어보는것은 파일을 따로 분리하게 선택.
  - 다음 프로젝트때도 사용하기 위해 위 프리셋을 저장 할꺼냐? N

## ES6 - class 참조
* class, private(#), set, get, static, extends, super, 

## https://github.com/kaorun343/vue-property-decorator
## @Component로 class 컴포넌트 생성 예제
* 새로운 파일 message.vue파일을 생성하고 코딩
```
<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{message}}</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component  // 데코레이터
export default class Message extends Vue {
  message: string = 'message!!!!!';
}
</script>
```

## @Prop 으로 데이터 전달하기
* children.vue 파일을 생성해서 props로 parentMessage를 받는 컴포넌트를 class로 만든다.
  - 반드시 @Component @Prop 을 잘 확인해야한다.
  - @Prop() parentMessage?: string; 이런식으로 사용한다. (vue-property-decorator 를 import하여 사용)
  - 아래와 같이 props validation을 줄 수도있다.
  - @Prop(String) private msg!: string;
  - @Prop([String, Number]) private msg!: string;
  - @Prop({ default: 'hi' }) private msg!: string;

## @Watch로 데이터 변화 감지 (메소드 데코레이터)
* (vue-property-decorator 를 import하여 사용) Watch.
* @Watch('바뀔값') 이와같이 사용
  - 인자로는 감시할 변수를 넣어준다.
  - 실행할 함수를 바로 아래쪽에 넣어주고 안쪽에 원하는 코딩을 진행한다.

## @Emit 으로 이벤트 전달하기 (메소드 데코레이터)
* @Emit(event?: string) decorator
* 부모컴포넌트에서 넘겨준 이벤트핸들러가 있고 자식 컴포넌트에서는 @Emit() 으로 넘겨받은 핸들러를 사용할 수 있다.
  - 부모로부터 넘겨받은 핸들러명이 같다면 @Emit() 인자를 넣을 필요가 없고 그냥 같은 이름으로 사용한다.
```
@Emit()
handler(){
  // ... 
}
```

## @Provide/@inject 로 데이터 전달하기 일반적으로는 사용하지 않는게 좋음.
* https://kr.vuejs.org/v2/api/index.html#provide-inject
* 부모자식간에 props로 데이터를 넘겨줘서 받아서 처리를 했는데 provide/inject를 사용하면 props를 넘겨주지 않고 바로 inject로 사용할 수 있다.

## @Model 사용하기
* v-model 과는 다른기능
* 부모로부터 넘겨받은 prop이벤트를 type을 정하고 원하는 함수에 바인딩하는것
  - ex) @Model('change', { type: Boolean }) readonly checked!: boolean

