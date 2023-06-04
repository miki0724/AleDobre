import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Nawigacja({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#A60202",
      }}
    >
      <Icon icon="home" text="Menu" color="primary" />
      <Icon icon="cart" text="Koszyk" />
      <Icon icon="fast-food" text="Jedzenie" />
    </View>
  );
}
const Icon = (props) => (
  <TouchableOpacity onPress={() => navigation.navigate("Pizza")}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 1, alignSelf: "center", color: "#FCBA04" }}
      />
      <Text style={{ color: "#FCBA04", fontSize: 15 }}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
