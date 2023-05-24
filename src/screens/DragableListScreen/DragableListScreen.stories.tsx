// stories/Button.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DragableListScreen from "./DragableListScreen";

export default {
  title: "스크린/DragableListScreen",
  component: DragableListScreen,
} as ComponentMeta<typeof DragableListScreen>;

export const DragableListScreenTest: ComponentStory<typeof DragableListScreen> = () => (
  <DragableListScreen />
);
