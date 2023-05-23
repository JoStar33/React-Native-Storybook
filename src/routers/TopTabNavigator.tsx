import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Menus } from "constants/menus";
import MovieScreen from "screens/MovieScreen/MovieScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Menus.Home}
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name={Menus.Home}
        component={HomeScreen}
        options={{ tabBarLabel: Menus.Home }}
      />
      <Tab.Screen
        name={Menus.Movies}
        component={MovieScreen}
        options={{ tabBarLabel: Menus.Movies }}
      />
      <Tab.Screen
        name={Menus.Profile}
        component={ProfileScreen}
        options={{ tabBarLabel: Menus.Profile }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
