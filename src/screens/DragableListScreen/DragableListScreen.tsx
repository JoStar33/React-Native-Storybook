import DragList from "components/organization/containers/DragList/DragList";
import React, { useState } from "react";
import { View } from "react-native";
import { DragData } from "types/apps/drag";

interface ExampleDragData extends DragData {
  id: string;
  name: string;
  age: number;
}

const DragableListScreen = () => {
  const [dragList, setDragList] = useState<ExampleDragData[]>([
    {
      id: "1", 
      name: "안녕", 
      age: 23, 
      title: "첫번째 제목" 
    },
    {
      id: "2", 
      name: "안녕", 
      age: 23, 
      title: "두번째 제목" 
    },
    {
      id: "3", 
      name: "안녕", 
      age: 23, 
      title: "세번째 제목" 
    }
  ]);
  const handleDragEnd = (data: ExampleDragData[]) => {
    setDragList(data);
  };
  return (
    <View>
      <DragList<ExampleDragData>
        data={dragList}
        handleDragEnd={(data: ExampleDragData[]) => handleDragEnd(data)}
      />
    </View>
  );
};

export default DragableListScreen;
