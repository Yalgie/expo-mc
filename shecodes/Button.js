// Button.js
import React from "react";
import { Text, Pressable } from "react-native";
import { StyleSheet } from 'react-native';

export default function Button({ onPress, title }) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        opacity: pressed ? 0.5 : 1,
      })}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "black",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});