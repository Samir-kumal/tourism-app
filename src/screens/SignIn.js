import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import SignUpTemplate from "../components/SignUpTemplate";
import { Icons } from "../constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
const SignIn = () => {
  const Style = {
    textSize: "15px",
  };

  return (
    <SafeAreaView className="bg-[#E9EEF2] h-full">
      <View className="h-60 w-full flex justify-center items-center ">
        <Text className="text-black text-3xl">Sign In</Text>
      </View>
      <View className="flex justify-center flex-row">
        <SignUpTemplate>
          <Image
            className="h-6 w-6"
            source={require("../../assets/Google.png")}
          />
          <Text className={Style.textSize}>Google</Text>
        </SignUpTemplate>
        <SignUpTemplate>
          <Image source={require("../../assets/Facebook.png")} />
          
           
          <Text className={Style.textSize}>Facebook</Text>
        </SignUpTemplate>
      </View>
      {/* sign up container */}
      <View className=" flex justify-center  w-full h-72  items-center">
        <TextInput
          className=" bg-[#ffffff] px-4 my-2  w-[85%] m-2 rounded-lg py-4"
          placeholder="Email"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4"
          placeholder="Password"
          secureTextEntry={true}
        />
        {/* <Image source={require("../../assets/EmailIcon.png")} /> */}
        {/* <Image source={Icons[0].icons} /> */}
        <Button ClassName="bg-primary" textClassName = "text-white">Login</Button>
        <View className="flex items-end mx-4 px-6 w-full translate-y-4 ">
          <Text
            onPress={() => Alert.alert("hello world")}
            className="text-red-500"
          >
            Forgot Password?
          </Text>
        </View>
      </View>

      <View className="flex items-center">
        <Button ClassName="border-[1px] border-primary my-2 bg-white">
          Register
        </Button>
        <Button ClassName="border-[1px] border-primary my-2 bg-white">
          Login with Mobile
        </Button>
      </View>
      <View className="flex items-center mx-4">
        <Text>
          Don't have account?, <Text className="font-bold"> Signup</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
