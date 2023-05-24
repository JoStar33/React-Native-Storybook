import { StackMenus } from "constants/menus";
import DrawerNavigator from "routers/DrawerNavigator";
import MovieDetailScreen from "screens/MovieDetailScreen/MovieDetailScreen";
import { StackMenu } from "types/apps/menu";

export const stackMenu: StackMenu[] = [
  /* 사이드 네비게이터 */
  {
    name: StackMenus.DrawerNavigator,
    component: DrawerNavigator,
  },
  /* 아래부터는 일반 네비게이터 */
  {
    name: StackMenus.MovieDetailScreen,
    component: MovieDetailScreen,
  },
];
