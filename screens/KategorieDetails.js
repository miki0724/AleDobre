import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import About from "../components/kategoriaJedzenia/About";
import { ScrollView } from "react-native";
import MenuItemsPizza from "../components/kategoriaJedzenia/MenuItemsPizza";
import Nawigacja from "../components/home/Nawigacja";

export default function KategorieDetails({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#FCBA04" }}>
        <About />
        <MenuItemsPizza />
      </ScrollView>
      <View style={{ backgroundColor: "#A60202", borderWidth: 1 }}>
        <Nawigacja />
      </View>
    </SafeAreaView>
  );
}
