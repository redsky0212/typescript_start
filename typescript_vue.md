#
## TypeScript 를 Vue Component에 적용하는 두가지 방법
* Vue.extend 를 이용하여 객체로 만드는 방법.(결론: TypeScript와 좋은 조합이 아니다.)
* Class로 만드는 방법.

## Vue에서 Class방식으로 TypeScript사용시 문제점
* 맵핑헬퍼 사용시 문제점

## TypeScript로 Vue 프로젝트 구성 (https://joshua1988.github.io/vue-camp/ts/with-vue.html#%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
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
  