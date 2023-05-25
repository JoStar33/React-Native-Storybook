import { server } from "./src/mocks/native";
/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/App";
if (process.env.NODE_ENV === "development") {
  require("react-native-url-polyfill/auto");
  server.listen({ onUnhandledRequest: "bypass" });
}

AppRegistry.registerComponent(appName, () => App);
