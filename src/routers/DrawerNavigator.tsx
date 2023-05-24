import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "components/layouts/sidebar/SideBar";
import { sideMenu } from "datas/menus";

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
