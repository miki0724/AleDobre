import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Menu");
  return (
    <View
      style={{ flexDirection: "row", alignSelf: "center", paddingVertical: 18 }}
    >
      {/*Header buttons */}
      <HeaderButton
        text="Menu"
        btnColor="red"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Koszyk"
        btnColor="yellow"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? "#A50104" : "white",
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "#F3F3F3" : "black",
        fontSize: 15,
        fontWeight: "800",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
