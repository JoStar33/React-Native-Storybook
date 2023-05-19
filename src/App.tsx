import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from "react-query";
import Navigator from "./Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;