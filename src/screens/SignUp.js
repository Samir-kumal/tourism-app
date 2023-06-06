import { View, Text,  TextInput, Image } from 'react-native'
import React from 'react'
import { Icons } from "../constants/Icons";
import Button from "../components/Button";
const SignUp = () => {


  
  return (
    <View className="bg-[#E9EEF2] h-full">
      <View className="h-60 w-full flex justify-center items-center ">
        <Text className="text-black translate-y-6 text-3xl">Sign Up</Text>
      </View>
      <View className="flex justify-center flex-row">

      </View>
      {/* sign up container */}
      <View className=" flex justify-center  w-full h-fit  items-center">
        <TextInput
          className=" bg-[#ffffff] px-4 my-2   w-[85%] mb-4 rounded-lg py-4"
          placeholder="First name"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4"
          placeholder="Last name"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4"
          placeholder="Email"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4"
          placeholder="Password"
          secureTextEntry={true}
        />
        {/* <Image source={require("../../assets/EmailIcon.png")} /> */}
        {/* <Image source={Icons[0].icons} /> */}
        <Button ClassName="bg-[#8062F8] mt-4">Register</Button>
      
      </View>

      <View className="flex items-center">
        <Button ClassName="border-[1px]  border-[#8062f8] my-4 bg-white">
          Login
        </Button>
     
      </View>
      <View className="flex items-center mx-4">
        <Text>
          Already have account?, <Text className="font-bold"> Login</Text>
        </Text>
      </View>
    </View>
  )
}

export default SignUp