import DraggableCard from "components/molecules/cards/DraggableCard/DraggableCard";
import React from "react";
import { View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DragData } from "types/apps/drag";

interface Props<T> {
  data: T[];
  handleDragEnd: (data: T[]) => void;
}

const DragList = <T extends DragData>({ data, handleDragEnd }: Props<T>) => (
  <View>
    <GestureHandlerRootView>
      <DraggableFlatList
        data={data}
        renderItem={({ item, isActive, drag }) => (
          <DraggableCard<T> item={item} isActive={isActive} drag={drag} />
        )}
        keyExtractor={(item, idx) => String(idx)}
        onDragEnd={({ data }) => handleDragEnd(data)}
      />
    </GestureHandlerRootView>
  </View>
);

export default DragList;
