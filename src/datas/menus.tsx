import { BottomMenus, DrawerMenus, StackMenus } from "constants/menus";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabNavigator from "routers/BottomTabNavigator";
import DragableListScreen from "screens/DragableListScreen/DragableListScreen";
import MovieDetailScreen from "screens/MovieDetailScreen/MovieDetailScreen";
import MovieRowListScreen from "screens/MovieRowListScreen/MovieRowListScreen";
import MovieScreen from "screens/MovieScreen/MovieScreen";
import NotificationScreen from "screens/NotificationScreen";
import SwipeListScreen from "screens/SwipeListScreen/SwipeListScreen";
import { BottomTabMenu, SideMenu, StackMenu } from "types/apps/menu";
import HomeScreen from "../screens/MainScreen";

const sideMenu: SideMenu[] = [
  {
    name: "홈으로",
    component: BottomTabNavigator,
    navigate: DrawerMenus.DrawerHome,
    icon: <FontAwesomeIcon name="home" />,
  },
  {
    name: "공지사항 확인하기",
    component: NotificationScreen,
    navigate: DrawerMenus.NotificationScreen,
    icon: <FontAwesomeIcon name="envelope-square" />,
  },
]

const bottomTabMenu: BottomTabMenu[] = [
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

const stackMenu: StackMenu[] = [
  {
    name: StackMenus.MovieDetailScreen,
    component: MovieDetailScreen,
  }
];

export { bottomTabMenu, sideMenu, stackMenu };

