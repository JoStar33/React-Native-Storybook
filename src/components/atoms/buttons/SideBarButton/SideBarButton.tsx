import { DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { SideMenu } from 'types/apps/menu';

interface Props {
  props: DrawerContentComponentProps;
  menu: SideMenu;
}

const SideBarButton = ({ props, menu }: Props) => {
  return (
    <DrawerItem
      icon={() => menu.icon}
      label={menu.name}
      onPress={() => {
        props.navigation.navigate(menu.navigate);
      }}
    />
  );
};

export default SideBarButton;