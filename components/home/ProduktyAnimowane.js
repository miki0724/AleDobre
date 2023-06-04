import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
const kategorie = [
  {
    id: "0",
    image: "https://cdn-icons-png.flaticon.com/512/6978/6978255.png",
    name: "Pizza",
  },
  {
    id: "1",
    image: "https://cdn-icons-png.flaticon.com/128/3075/3075977.png",
    name: "Burger",
  },
  {
    id: "2",
    image: "https://cdn-icons-png.flaticon.com/128/1046/1046786.png",
    name: "Frytki",
  },
  {
    id: "3",
    image: "https://cdn-icons-png.flaticon.com/128/706/706893.png",
    name: "Kebab",
  },
];
export default function ProduktyAnimowane() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {/*ikony na srodku */}
      {kategorie.map((kategorie, index) => (
        <Pressable style={{ margin: 10 }} key={index}>
          <Image
            source={{ uri: kategorie.image }}
            style={{ width: 70, height: 70 }}
          />
          <Text style={{ color: "#1B2021", fontWeight: 600, fontSize: 16 }}>
            {kategorie.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
