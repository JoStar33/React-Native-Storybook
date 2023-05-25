# 리액트 네이티브 스토리북 적용형태

리액트 네이티브에 스토리북을 적용시킨 형태를 만들어보자.

## 설치 스탭

다사다난.... 이루 말로 표현할 수 없을 정도로 고통스러웠으나 어째어째 성공! 기록을 하자면, 리액트 네이티브는 yarn으로 구동하는게 일반적으로 보였다? 그래서 yarn버전을 맞춰야했고 yarn버전을 22버전까지 올렸다.
- npx react-native init MyApp --template react-native-template-storybook
  - 리액트 네이티브를 처음 설치하는 명령어이다.

<!-- - yarn add styled-components@5.3.5
  - 스타일드 컴포넌트를 위해 필요한 명령어이다.
  - 5.3.5로 맞추지 않으면, Error: Unable to resolve module path from postcss\lib\input.js: path could not be found이런 에러가 나온다. 나는 버전 6으로 돌리고 있었기에 에러가 난거였고 버전을 5.3.5로 맞춰줘야할 필요가 있었다. 
  
  스타일드 컴포넌트는 더이상 사용하지않기에 삭제.
  -->

- yarn add react-native-pager-view react-native-safe-area-context react-native-tab-view @react-navigation/native @react-navigation/material-top-tabs
  - 상단 탭을 통한 라우팅 기능을 제공하는 라이브러리들이다.

- yarn add react-native-dotenv
  - env파일 사용을 위해 필요한 라이브러리

- yarn add --dev babel-plugin-module-resolver
  - 절대경로 설정을 위해 필요한 라이브러리.

- yarn add @react-navigation/stack react-native-gesture-handler
  - 리액트 네이티브 라우팅을 스택의 형태로 수행할 수 있게 해주는 라이브러리들.

- yarn add react-native-vector-icons
  - 리액트 네이티브에서 범용적으로 사용되는 아이콘.

- yarn add @react-native-async-storage/async-storage
  - 리액트 네이티브 환경에서 localStorage역할을 수행하는 asyncStorage.

- yarn add react-query
  - 자세한 설명은 생략한다.

- yarn add @react-native-masked-view/masked-view react-native-linear-gradient react-native-skeleton-placeholder react-native-web-linear-gradient
  - 스켈레톤 ui를 사용하기위한 라이브러리.

- yarn add rxn-units
  - 뷰포트 단위를 사용하기위해 설치한 라이브러리.
  
- yarn add react-hook-form @hookform/resolvers
  - 리액트 훅 폼을 활용하기 위해 필요한 라이브러리들.

- yarn add react-native-draggable-flatlist react-native-reanimated
  - 리액트 네이티브 환경에서 드래그가 가능하도록 하는 라이브러리.

- yarn add @react-navigation/material-bottom-tabs react-native-paper
  - 리액트 네이티브 하단 메뉴바 사용을 위해 설치한 라이브러리들.

- yarn add @react-navigation/drawer
  - 리액트 네이티브 드로워 메뉴를 활용하기 위한 라이브러리.

- yarn add react-native-calendars
  - 리액트 네이티브 캘린더 기능을 구현하기위해 설치한 라이브러리

- yarn add react-native-signature-canvas react-native-webview rn-fetch-blob
  - 리액트 네이티브 싸인기능 구현 라이브러리

- yarn add react-native-url-polyfill AND yarn add msw --dev
  - 리액트 네이티브 환경에서 msw를 동작시키기 위한 라이브러리. 부가적인 셋팅 설명이 필요한데, 이는 mocks폴더에서 확인바람.
## 스타일드 컴포넌트를 손절친 이유 
스타일드 컴포넌트를 사용하다가 뜯어냈다. 이유는 스타일드 컴포넌트를 사용하면 스타일 호환이 제대로 이루어지지 않으며 styleSheet를 사용했을때도 스타일드 컴포넌트처럼 css in js의 형태로 코드를 짜는게 가능하다는 점이다. 물론 컴포넌트 네이밍을 못한다는 점은 아쉽지만 호환을 설정하는 과정이 너무 까다롭기에 손절을 결정.


## 앞으로 하고싶은 것들
- 리액트 네이티브 화면 라우팅✅
- 작은 단위 컴포넌트 전부 만들어보기
- 알람기능 만들어보기
- 카메라 사용기능 구현해보기