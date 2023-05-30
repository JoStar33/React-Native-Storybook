import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "components/layouts/header/Header";
import SideBar from "components/layouts/sidebar/SideBar";
import { sideMenu } from "datas/menus/sideMenus";
import { userInfo } from "datas/users";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <Header/>,
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
