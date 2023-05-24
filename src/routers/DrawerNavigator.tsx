import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "components/layouts/sidebar/SideBar";
import { sideMenu } from "datas/menus";
import { userInfo } from "datas/users";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center"
      }}
      drawerContent={(props) => (
        <SideBar
          props={props}
          userInfo={userInfo}
          sideMenu={sideMenu}
        />
      )}
    >
      {sideMenu.map((menu, _id) => (
        <Drawer.Screen
          key={_id}
          name={menu.navigate}
          component={menu.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
