import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Panauti village",
    description: "Panauti is a wonderful place",
    image:"https://cdn.discordapp.com/attachments/1115513410893914142/1115513798351134752/03.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    description: "Panauti is a wonderful place",
    image:"https://cdn.discordapp.com/attachments/1115513410893914142/1115513798741217372/04.png"

  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Fourth Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Fifth Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d78",
    title: "Sixth Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d79",
    title: "Seventh Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7e",
    title: "Seventh Item",
    description: "Panauti is a wonderful place",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29r79",
    title: "Seventh Item",
    description: "Panauti is a wonderful place",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#fff",
    padding: 40,
    marginVertical: 18,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight:"bold",
    padding:8,
    
  },
});

const Item = ({ title, description }) => (
  <View className="h-[30vh] my-3 rounded-lg bg-[#f2f2f2]">
    <Image
      className="h-36 rounded w-full"
      source={{
        uri: "https://cdn.discordapp.com/attachments/1115513410893914142/1115513798351134752/03.png",
      }}
    />
    <Text style={styles.title}>{title}</Text>
    <Text className = "px-2">{description}</Text>
  </View>
);
const SearchPlaces = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="w-full h-40 px-4 bg-white items-center justify-center">
        <TextInput
          className="border-[1px] py-4 px-4 rounded-lg w-full"
          placeholder="Search Places"
        />
      </View>
      <FlatList
        className="mx-2"
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SearchPlaces;
