import { TouchableOpacity, View
 } from "react-native";
import React from "react";

const SignUpTemplate = (props) => {
  return (
    <TouchableOpacity className="w-[40%] mx-3 shadow-xl h-16 flex flex-row justify-center items-center rounded-xl bg-white">
      <View className = "flex flex-row items-center gap-3 justify-center">{props.children}</View>
    
    </TouchableOpacity>
  );
};

export default SignUpTemplate;
