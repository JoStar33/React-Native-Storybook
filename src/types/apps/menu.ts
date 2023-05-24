interface SideMenu {
  name: string;
  navigate: string;
  component: () => JSX.Element;
  icon: React.ReactElement;
};

interface BottomTabMenu {
  name: string;
  component: () => JSX.Element;
  tabBarLabel: string;
  tabBarIcon: JSX.Element;
};

interface StackMenu {
  name: string;
  component: () => JSX.Element;
};


export type { SideMenu, BottomTabMenu, StackMenu };

