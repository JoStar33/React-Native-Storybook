import {
  DrawerContentComponentProps,
  DrawerContentScrollView
} from "@react-navigation/drawer";
import SideBarButton from "components/atoms/buttons/SideBarButton/SideBarButton";
import UserCard from "components/molecules/cards/UserCard/UserCard";
import { View } from "react-native";
import { UserCardInfo } from "types/apps/card";
import { SideMenu } from "types/apps/menu";
import { sideBarStyles } from "./SideBar.style";

interface Props {
  props: DrawerContentComponentProps;
  userInfo: UserCardInfo;
  sideMenu: SideMenu[];
}

const SideBar = ({ props, userInfo, sideMenu }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={sideBarStyles.drawerContent}>
          <UserCard userInfo={userInfo} />
          {sideMenu.map((menu, _id) => (
            <SideBarButton key={_id} props={props} menu={menu}/>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default SideBar;
