import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Menus } from "constants/menus";
import DragableListScreen from "screens/DragableListScreen/DragableListScreen";
import MovieRowListScreen from "screens/MovieRowListScreen/MovieRowListScreen";
import MovieScreen from "screens/MovieScreen/MovieScreen";
import SwipeListScreen from "screens/SwipeListScreen/SwipeListScreen";
import HomeScreen from "../screens/MainScreen";
//const Tab = createMaterialTopTabNavigator();
// screenOptions={{
//   tabBarActiveTintColor: "#e91e63",
//   tabBarLabelStyle: { fontSize: 12 },
//   tabBarStyle: { backgroundColor: "powderblue" },
// }}
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Menus.MainScreen}
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name={Menus.MainScreen}
        component={HomeScreen}
        options={{ tabBarLabel: Menus.MainScreen }}
      />
      <Tab.Screen
        name={Menus.Movies}
        component={MovieScreen}
        options={{ tabBarLabel: Menus.Movies }}
      />
      <Tab.Screen
        name={Menus.MovieRowList}
        component={MovieRowListScreen}
        options={{ tabBarLabel: Menus.MovieRowList }}
      />
      <Tab.Screen
        name={Menus.SwipeList}
        component={SwipeListScreen}
        options={{ tabBarLabel: Menus.SwipeList }}
      />
      <Tab.Screen
        name={Menus.DragableList}
        component={DragableListScreen}
        options={{ tabBarLabel: Menus.DragableList }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
