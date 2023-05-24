import { DrawerMenus } from "constants/menus";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import BottomTabNavigator from "routers/BottomTabNavigator";
import NotificationScreen from "screens/NotificationScreen";
import SignScreen from "screens/SignScreen/SignScreen";
import { SideMenu } from "types/apps/menu";

export const sideMenu: SideMenu[] = [
  {
    name: "홈으로",
    component: BottomTabNavigator,
    navigate: DrawerMenus.DrawerHome,
    icon: <FontAwesomeIcon size={20} name="home" />,
  },
  {
    name: "공지사항 확인하기",
    component: NotificationScreen,
    navigate: DrawerMenus.NotificationScreen,
    icon: <FontAwesomeIcon size={20} name="envelope-square" />,
  },
  {
    name: "서명하기",
    component: SignScreen,
    navigate: DrawerMenus.SignScreen,
    icon: <FontAwesomeIcon size={20} name="pencil" />,
  },
]