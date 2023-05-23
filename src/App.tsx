import { NavigationContainer } from "@react-navigation/native";
import ValidateDialog from "components/molecules/dialogs/ValidateDialog/ValidateDialog";
import { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Context } from "utils/Context";
import Navigator from "./Navigator";

const queryClient = new QueryClient();

const App = () => {
  const dialogText = useRef<string>("");
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    setDialogShow(isShow);
    dialogText.current = text;
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ setDialog }}>
        <ValidateDialog
          dialogShow={dialogShow}
          dialogText={dialogText.current}
          handleDialog={() => setDialogShow(false)}
        />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Context.Provider>
    </QueryClientProvider>
  );
};

export default App;
