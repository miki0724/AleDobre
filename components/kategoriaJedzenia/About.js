import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Image } from "react-native";

import MenuItemsPizza from "./MenuItemsPizza";
const image =
  "https://st5.depositphotos.com/75472038/63701/i/450/depositphotos_637019686-stock-photo-cute-cartoon-pizza-character.jpg";
const title = "";

export default function About() {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 27,
          marginTop: 10,
          marginHorizontal: 15,
          fontWeight: 500,
          color: "#A60202",
          textAlign: "center",
        }}
      >
        Może jakąś pizzę?
      </Text>
      <MenuItemsPizza></MenuItemsPizza>
    </SafeAreaView>
  );
}
