import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import KategorieDetails from "./screens/KategorieDetails";
import About from "./components/kategoriaJedzenia/About";
import Nawigacja from "./components/home/Nawigacja";
export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Pizza" component={KategorieDetails}></Stack.Screen>
        <Stack.Screen name="Navigation" component={Nawigacja}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
