import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserCard from './UserCard';

export default {
  title: '컴포넌트/분자/카드/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

export const UserCardTest: ComponentStory<typeof UserCard> = args => (
  <UserCard {...args}/>
);

UserCardTest.args = {
  userInfo: {
    profile_img: "https://api.adorable.io/avatars/50/abott@adorable.png",
    sns_id: "@jostar33",
    name: "Jose",
    follower: 20,
    following: 20
  }
}