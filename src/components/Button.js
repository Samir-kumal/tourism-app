import {  Text, TouchableOpacity,TouchableHighlight } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
        <TouchableHighlight underlayColor="red"  activeOpacity={.7} onPress={props.onPress} className = {`w-[85%] h-16  rounded-[10px] flex justify-center items-center ${props.ClassName}`}>
        <Text className = {`text-[17px] font-semibold ${props.textClassName}`}>
            {props.children}
        </Text>
      
    </TouchableHighlight>
  )
}

export default Button