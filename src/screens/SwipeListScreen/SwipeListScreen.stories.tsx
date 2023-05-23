// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeListScreen from "./SwipeListScreen";

export default {
  title: "스크린/SwipeListScreen",
  component: SwipeListScreen,
} as ComponentMeta<typeof SwipeListScreen>;

export const SwipeListScreenTest: ComponentStory<typeof SwipeListScreen> = () => (
  <GestureHandlerRootView>
    <SwipeListScreen />
  </GestureHandlerRootView>
);
