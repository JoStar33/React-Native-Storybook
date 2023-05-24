import { createStackNavigator } from "@react-navigation/stack";
import { stackMenu } from "datas/menus";
import DrawerNavigator from "routers/DrawerNavigator";
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // screenOptions={{
      //   headerTitleAlign: "center",
      //   headerLeft: ({ onPress }) => (
      //     <TouchableOpacity onPress={onPress}>
      //       <Text>Left</Text>
      //     </TouchableOpacity>
      //   ),
      //   headerTitle: ({ children }) => (
      //     <View>
      //       <Text>{children}</Text>
      //     </View>
      //   ),
      //   headerRight: () => (
      //     <View>
      //       <Text>Right</Text>
      //     </View>
      //   ),
      // }}
    >
      {/* 사이드 네비게이터 */}
      <Stack.Screen name="드로워" component={DrawerNavigator} />
      {/* 아래부터는 일반 네비게이터 */}
      {stackMenu.map((menu, _id) => (
        <Stack.Screen key={_id} name={menu.name} component={menu.component} />
      ))}
    </Stack.Navigator>
  );
};

export default MainScreen;
