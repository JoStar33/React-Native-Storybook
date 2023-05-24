import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "components/layouts/sidebar/SideBar";
import Icon from "react-native-vector-icons/FontAwesome";
import NotificationScreen from "screens/NotificationScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SideBar
          props={props}
          userInfo={{
            profile_img:
              "https://api.adorable.io/avatars/50/abott@adorable.png",
            sns_id: "@jostar33",
            name: "Jose",
            follower: 20,
            following: 20,
          }}
          sideMenu={[
            {
              title: "홈으로",
              navigate: "Home",
              icon: <Icon name="home" />,
            },
            {
              title: "공지사항 확인하기",
              navigate: "NotificationScreen",
              icon: <Icon name="envelope-square" />,
            },
          ]}
        />
      )}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
