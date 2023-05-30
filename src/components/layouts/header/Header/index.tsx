import React from "react";
import { View, Image } from "react-native";
import { headerStyles } from "./Header.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation, DrawerActions, NavigationProp } from "@react-navigation/native";
import { BottomMenus } from "constants/menus";

//Navigation Props로 넘길 값이 존재하지않고 단순하게 화면만 넘어갈 생각이면 아래와 같이 작성.
//이렇게 작성해야만 네비게이션 never타입 에러가 발생하지 않음.
export type RootStackParamList = {
  Home: undefined;
};

const Header = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={headerStyles.container}>
      <View
        style={headerStyles.leftButton}
      >
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <FeatherIcon size={30} name="sidebar" color={"black"} />
        </TouchableOpacity>
      </View>
      <View style={headerStyles.logoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(BottomMenus.Home)}>
          <Image
            style={headerStyles.logo}
            source={require("StorybookRN/public/logo.jpg")}
          />
        </TouchableOpacity>
      </View>
      <View style={headerStyles.rightButton}></View>
    </View>
  );
};

export default Header;
