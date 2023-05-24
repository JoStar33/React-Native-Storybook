import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "routers/DrawerNavigator";
import MovieDetailScreen from "screens/MovieDetailScreen/MovieDetailScreen";
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
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
      {/* 일반 네비게이터 */}
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainScreen;
