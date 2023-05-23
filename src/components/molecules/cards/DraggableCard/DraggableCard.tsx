import React from "react";
import { TouchableOpacity, View, Text, Pressable } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DragData } from "types/apps/drag";
import { draggableCardStyles } from "./DraggableCard.style";

interface Props<T> {
  item: T;
  drag: () => void;
  isActive: boolean;
}

const DraggableCard = <T extends DragData>({ item, drag, isActive }: Props<T>) => {
  return (
    <GestureHandlerRootView style={draggableCardStyles.container}>
      <ScaleDecorator>
        <View>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={drag}
            disabled={isActive}
          >
            <View>
              <Text style={{ fontSize: 30, color: "black" }}>= </Text>
            </View>
          </TouchableOpacity>
          <Pressable>
            <Text>{item?.title}</Text>
            <Text style={draggableCardStyles.contents}>UNKNOWN</Text>
          </Pressable>
        </View>
      </ScaleDecorator>
    </GestureHandlerRootView>
  );
};

export default DraggableCard;
