import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import ProduktyAnimowane from "../components/home/ProduktyAnimowane";
import PasekPrzewijany from "../components/home/PasekPrzewijany";
import PizzaMenu from "../components/home/PizzaMenu";
import Nawigacja from "../components/home/Nawigacja";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#FCBA04" }}
      >
        <View style={{ backgroundColor: "#FCBA04" }}>
          <HeaderTabs />
          <PasekPrzewijany />
          <ProduktyAnimowane />
        </View>

        <PizzaMenu onPress={() => navigation.navigate("Pizza")} />
      </ScrollView>
      <View style={{ backgroundColor: "#A60202", borderWidth: 1 }}>
        <Nawigacja />
      </View>
    </SafeAreaView>
  );
}
