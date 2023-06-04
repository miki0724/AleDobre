import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Pizza from "./Pizza";
import { ScrollView } from "react-native";
const PizzaMenu = [
  {
    id: "10",
    image:
      "https://i.pinimg.com/236x/ba/40/9f/ba409f605be3d50773826994b7e37929.jpg",
    name: "Double Cheese",
    quantity: 0,
    price: 22.49,
  },
  {
    id: "11",
    image:
      "https://www.zajadam.pl/wp-content/uploads/2015/05/pizza-wiejska-4.jpg",
    name: "Pepperoni ",
    quantity: 0,
    price: 25.99,
  },
  {
    id: "12",
    image:
      "https://therecipecritic.com/wp-content/uploads/2022/12/salami_pizza-1.jpg",
    name: "Salami ",
    quantity: 0,
    price: 32.99,
  },
  {
    id: "13",
    image:
      "https://najlepszewkuchni.pl/storage/recipes/2017_11_15/0nTr3qWbjMvD50pE1rRp.jpg",
    name: "Vege ",
    quantity: 0,
    price: 24.99,
  },
  {
    id: "14",
    image:
      "https://tuscaneats.com/wp-content/uploads/2022/02/supreme-pizza.jpg",
    name: "Supreme ",
    quantity: 0,
    price: 45.99,
  },
  {
    id: "15",
    image:
      "https://amrestcdn.azureedge.net/ph-web-ordering/Pizza_Hut_PL/NEW_WWW/pizze%20maj%202021/PH_1000x1000_teksas.jpg",
    name: "Teksas",
    quantity: 0,
    price: 43.99,
  },
  {
    id: "16",
    image:
      "https://www.zajadam.pl/wp-content/uploads/2015/05/pizza-wiejska-4.jpg",
    name: "Wiejska ",
    quantity: 0,
    price: 37.99,
  },
  {
    id: "17",
    image:
      "https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg",
    name: "New York ",
    quantity: 0,
    price: 33.99,
  },
  {
    id: "18",
    image:
      "https://gdansk-poludnie.pl/wp-content/uploads/2021/05/Pizzerie-w-Gda%C5%84sku-najlepsza-pizza-tr%C3%B3jmiasto.jpeg",
    name: "Trójmiasto",
    quantity: 0,
    price: 33.33,
  },
  {
    id: "19",
    image: "https://img.chozoba.pl/23/05/1683032329793137.jpg",
    name: "RadomCity",
    quantity: 0,
    price: 29.99,
  },
];
const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
  },
  innerText: {
    color: "#ED474A",
  },
});
export default function MenuItemsPizza() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#FCBA04" }}
    >
      <View>
        {PizzaMenu.map((item, index) => (
          <Pizza item={item} key={index} />
        ))}
      </View>
    </ScrollView>
  );
}
