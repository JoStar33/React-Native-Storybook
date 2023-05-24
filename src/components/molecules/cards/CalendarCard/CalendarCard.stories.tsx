import { ComponentMeta, ComponentStory } from "@storybook/react";
import CalendarCard from "./CalendarCard";

export default {
  title: "컴포넌트/분자/카드/CalendarCard",
  component: CalendarCard,
} as ComponentMeta<typeof CalendarCard>;

export const CalendarCardTest: ComponentStory<typeof CalendarCard> = () => (
  <CalendarCard />
);
