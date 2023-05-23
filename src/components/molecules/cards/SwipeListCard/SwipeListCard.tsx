import SwipeButton from "components/atoms/buttons/SwipeButton/SwipeButton";
import { Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SwipeListData } from "types/apps/swipe";
import { swipeListCardStyles } from "./SwipeListCard.style";

interface Props {
  swipeListData: SwipeListData;
  handleDelete: () => {};
}

const SwipeListCard = ({ swipeListData, handleDelete }: Props) => {
  return (
    <Swipeable
      renderRightActions={(progress, dragX) => (
        <SwipeButton
          progress={progress}
          dragX={dragX}
          handleDelete={handleDelete}
        />
      )}
    >
      <View style={swipeListCardStyles.container}>
        <Text>My name is {swipeListData.name}.</Text>
      </View>
    </Swipeable>
  );
};

export default SwipeListCard;
