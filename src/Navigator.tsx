import { createStackNavigator } from "@react-navigation/stack";
import TopTabNavigator from "routers/TopTabNavigator";
import MovieDetailScreen from "screens/MovieDetailScreen/MovieDetailScreen";
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* 상단 네비게이터 */}
      <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
      {/* 일반 네비게이터 */}
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainScreen;
