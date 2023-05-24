import { Pressable, Text, TouchableOpacity } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";
import { DragData } from "types/apps/drag";
import { draggableCardStyles } from "./DraggableCard.style";

interface Props<T> {
  item: T;
  drag: () => void;
  isActive: boolean;
}

const DraggableCard = <T extends DragData>({
  item,
  drag,
  isActive,
}: Props<T>) => {
  return (
    <TouchableOpacity
      style={draggableCardStyles.container}
      activeOpacity={1}
      onPress={drag}
      disabled={isActive}
    >
      <ScaleDecorator>
        <Pressable>
          <Text style={draggableCardStyles.title}>{item?.title}</Text>
          <Text style={draggableCardStyles.contents}>UNKNOWN</Text>
        </Pressable>
      </ScaleDecorator>
    </TouchableOpacity>
  );
};

export default DraggableCard;
