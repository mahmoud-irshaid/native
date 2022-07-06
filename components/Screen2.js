import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function Screen2(params) {
  const dispatch = useDispatch();
  const txtStore = useSelector((state) => state.txtstore);

  return (
    <View>
      {txtStore.items.map((item) => (
        <Text>{item.text}</Text>
      ))}
    </View>
  );
}
export default Screen2;
