import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
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