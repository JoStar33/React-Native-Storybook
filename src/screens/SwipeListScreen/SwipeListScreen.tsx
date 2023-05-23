import SwipeListCard from "components/molecules/cards/SwipeListCard/SwipeListCard";
import { swipeListData } from "datas/swipes";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View
} from "react-native";
import { swipeListScreenStyles } from "./SwipeListScreen.style";

const SwipeListScreen = () => {
  const [lists, setLists] = useState(swipeListData);
  const deleteItem = (index: number) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  return (
    <SafeAreaView style={swipeListScreenStyles.container}>
      <FlatList
        data={lists}
        renderItem={({ item, index }) => 
          <SwipeListCard
            swipeListData={item}
            handleDelete={async () => deleteItem(index)}
          />
        }
        ItemSeparatorComponent={() => 
          <View style={swipeListScreenStyles.seperatorLine}></View>
        }
      />
    </SafeAreaView>
  );
};

export default SwipeListScreen;
