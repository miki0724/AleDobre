import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialComunityIcons from "react-native-vector-icons/Ionicons";

export const wszystkieKategorie = [
  {
    name: "Najlepsza Pizza w mieście!",
    image_url:
      "https://st5.depositphotos.com/75472038/63701/i/450/depositphotos_637019686-stock-photo-cute-cartoon-pizza-character.jpg",
    dodatkowe: "Szukaj pośród 20 rodzaji",
  },
  {
    name: "Burger jak u mamy!",
    image_url:
      "https://p.turbosquid.com/ts-thumb/GQ/Tvmzkq/sr6dpBcW/1/jpg/1585935447/600x600/fit_q87/1784fe305c711811752969acb07cd801257020be/1.jpg",
    dodatkowe: "no może prawie...",
  },
  {
    name: "Fryteczek?",
    image_url:
      "https://thumbs.dreamstime.com/b/urocza-posta%C4%87-maskotki-z-frytek-s%C5%82odkie-frytki-kresk%C3%B3wka-maskotka-%C5%9Bmieszne-wyra%C5%BCenie-pijane-zawroty-g%C5%82owy-203906658.jpg",
    dodatkowe: "Proszę :(",
  },
  {
    name: "Ogromny kebab!",
    image_url:
      "https://media.istockphoto.com/id/945065528/es/vector/patr%C3%B3n-sin-fisuras-de-doner-kebab-rollo-rollo-de-pollo-comida-rapida-kebab-shawarma-estilo-de.jpg?s=170667a&w=0&k=20&c=k4nhGpDUrw9j5RZVs2aeomtJP9HoaP7xcxX830qkDps=",
    dodatkowe: "Robi wrażenie",
  },
];

export default function KategorieItem(navigation) {
  return (
    <>
      {wszystkieKategorie.map((kategoria, index) => (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 20 }}>
          <View
            key={index}
            style={{
              marginTop: 10,
              padding: 15,
              borderRadius: 20,
              backgroundColor: "#A60202",
            }}
          >
            <KategorieImage image={kategoria.image_url} />
            <KategoriaInfo
              name={kategoria.name}
              dodatkowe={kategoria.dodatkowe}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const KategorieImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 10, top: 20 }}>
      <MaterialComunityIcons name="restaurant-sharp" size={35} color="white" />
    </TouchableOpacity>
  </>
);
const KategoriaInfo = (props) => (
  <View style={{ marginTop: 3 }}>
    <Text style={{ fontSize: 20, fontWeight: 600, color: "#FCBA04" }}>
      {props.name}
    </Text>
    <Text style={{ fontSize: 15, fontWeight: 600, color: "#FCBA04" }}>
      {props.dodatkowe}
    </Text>
  </View>
);
