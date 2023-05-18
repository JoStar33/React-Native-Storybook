# 리액트 네이티브 스토리북 적용형태

리액트 네이티브에 스토리북을 적용시킨 형태를 만들어보자.

## 설치 스탭

다사다난.... 이루 말로 표현할 수 없을 정도로 고통스러웠으나 어째어째 성공! 기록을 하자면, 리액트 네이티브는 yarn으로 구동하는게 일반적으로 보였다? 그래서 yarn버전을 맞춰야했고 yarn버전을 22버전까지 올렸다.
- npx react-native init MyApp --template react-native-template-storybook
  - 리액트 네이티브를 처음 설치하는 명령어이다.
- yarn add styled-components
  - 스타일드 컴포넌트를 위해 필요한 명령어이다.
- yarn add react-native-pager-view react-native-safe-area-context react-native-tab-view
  - 상단 탭을 통한 라우팅 기능을 제공하는 라이브러리들이다.

## 앞으로 하고싶은 것들
- 리액트 네이티브 화면 라우팅
- 작은 단위 컴포넌트 전부 만들어보기
- 알람기능 만들어보기
- 카메라 사용기능 구현해보기