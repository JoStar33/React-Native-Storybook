import { BottomMenus } from "constants/menus";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import DragableListScreen from "screens/DragableListScreen/DragableListScreen";
import HomeScreen from "screens/MainScreen";
import MovieRowListScreen from "screens/MovieRowListScreen/MovieRowListScreen";
import MovieScreen from "screens/MovieScreen/MovieScreen";
import SwipeListScreen from "screens/SwipeListScreen/SwipeListScreen";
import { BottomTabMenu } from "types/apps/menu";

export const bottomTabMenu: BottomTabMenu[] = [
  {
    name: BottomMenus.Home,
    component: HomeScreen,
    tabBarLabel: "메인",
    tabBarIcon: <EntypoIcon size={20} name="home" />,
  },
  {
    name: BottomMenus.MovieList,
    component: MovieScreen,
    tabBarLabel: "카드형 영화",
    tabBarIcon: <EntypoIcon size={20} name="v-card" />,
  },
  {
    name: BottomMenus.MovieRowList,
    component: MovieRowListScreen,
    tabBarLabel: "줄형 영화",
    tabBarIcon: <FontistoIcon size={20} name="arrow-h" />,
  },
  {
    name: BottomMenus.SwipeList,
    component: SwipeListScreen,
    tabBarLabel: "스와이퍼 카드",
    tabBarIcon: <MaterialCommunityIcon size={20} name="gesture-swipe" />,
  },
  {
    name: BottomMenus.DragableList,
    component: DragableListScreen,
    tabBarLabel: "드래그 카드",
    tabBarIcon: <MaterialCommunityIcon size={20} name="drag" />,
  },
];