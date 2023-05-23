import { Animated, TouchableOpacity, View } from "react-native";
import { swipeButtonStyles } from "./SwipeButton.style";

interface Props {
  progress: Animated.AnimatedInterpolation<string | number>;
  dragX: Animated.AnimatedInterpolation<string | number>;
  handleDelete: () => {};
}

const SwipeButton = ({ progress, dragX, handleDelete }: Props) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity onPress={handleDelete} activeOpacity={0.6}>
      <View style={swipeButtonStyles.deleteBox}>
        <Animated.Text style={{ transform: [{ translateX: scale }] }}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

export default SwipeButton;
