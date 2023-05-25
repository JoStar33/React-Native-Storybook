import { NavigationContainer } from "@react-navigation/native";
import SuccessDialog from "components/molecules/dialogs/SuccessDialog/SuccessDialog";
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
    dialogText.current = text;
    setDialogShow(isShow);
  };
  const successDialogText = useRef<string>("");
  const [successDialogShow, setSuccessDialogShow] = useState<boolean>(false);
  const setSuccessDialog = (text: string, isShow: boolean) => {
    successDialogText.current = text;
    setSuccessDialogShow(isShow);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ setDialog, setSuccessDialog }}>
        <ValidateDialog
          dialogShow={dialogShow}
          dialogText={dialogText.current}
          handleDialog={() => setDialogShow(false)}
        />
        <SuccessDialog
          dialogShow={successDialogShow}
          dialogText={successDialogText.current}
          handleDialog={() => setSuccessDialogShow(false)}
        />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Context.Provider>
    </QueryClientProvider>
  );
};

export default App;
