import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

export default function TextInputBox({
  placeholder, password
}) {
    return (
    <TextInput 
      style={styles.textInput}
      placeholder={placeholder}
      secureTextEntry={password}
      placeholderTextColor={"#000000"}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "rgba(255, 253, 253, 1)",
    borderRadius: 50,
    margin: '4%',
    fontSize: 18,
    paddingLeft: 30,
    color: '#000000'
  }
});