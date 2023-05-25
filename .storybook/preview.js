import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const worker = setupWorker(
...handlers
);
worker.start();

export const decorators = [(Story) => {
  useEffect(() => {
    const iconFontStyles = `@font-face {
      src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format(truetype);
      font-family: "FontAwesome";
    }`;
    // Create stylesheet
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(iconFontStyles));
    // Inject stylesheet
    document.head.appendChild(style);
  }, []);
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </NavigationContainer>
  )
}];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}