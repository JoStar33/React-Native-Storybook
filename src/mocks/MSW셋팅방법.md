## Step1.
먼저 패키지를 다운받는다. 패키지는 아래 2개이다.
- yarn add react-native-url-polyfill
- yarn add msw --dev

## Step2.
테스팅(jest) 환경, 스토리북에 활용할 파일(server.ts) 한개, 애뮬레이터 환경에서 사용할 파일(native.ts) 한개를 만들어준다. 이때 애뮬레이터 환경에서 사용하는 msw는 기존 파일들과는 다르게 
```typescript
import { setupServer } from 'msw/native';
```

이런 형태로 setupServer를 가져온다.

## Step3.
구성한 네이티브 msw파일을 index.js에 설정해줘야한다.
```typescript
if (process.env.NODE_ENV === "development") {
  require("react-native-url-polyfill/auto");
  server.listen({ onUnhandledRequest: "bypass" });
}
```
다음과 같이 구성시키면 모든 설정이 끝났고, msw를 애뮬레이터 환경에서도 정상적으로 사용가능하다.


## 참고문서

https://github.com/JBudny/react-native-rtkq-testing-with-msw

https://mswjs.io/docs/faq

