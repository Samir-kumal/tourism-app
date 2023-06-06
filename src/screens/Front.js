import { ImageBackground, Image, SafeAreaView, Text, View, Alert } from "react-native";
import React from "react";
import Button from "../components/Button";

const Front = () => {
  return (
    <SafeAreaView className="w-full  bg-secondary">
      <ImageBackground
        className="w-full h-full flex flex-col justify-center"
        source={require("../../assets/div-wrapper_panauti.png")}
        resizeMode="cover"
      >
        <View className="h-[60vh] px-4 flex items-center w-full">
          <Image
            className="h-52  w-[50%]"
            source={require("../../assets/logo.png")}
          />
          <Image
            className="h-20  w-full "
            source={require("../../assets/panauti-text-logo.png")}
          />

          <View className=" w-full flex mt-8 translate-y-4  ">
            <Text className=" text-white font-bold text-xl text-justify">
              Start Exploring Panauti with app
            </Text>
            <Text className="text-white text-justify mt-2">
              Panauti Municipality warmly welcomes you! Discover the enchanting
              charm of our town and embark on an unforgettable journey of
              cultural exploration through our mobile app designed exclusively
              for tourists.
            </Text>
          </View>
          <View className="flex w-full my-10 translate-y-8 items-center">
            <Button
            onPress = {()=>Alert.alert("Fuck you ")}
              ClassName="bg-primary text-white"
              textClassName="text-white"
            >
              Explore Now
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Front;
