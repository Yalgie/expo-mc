// App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Boop")
    // console.warn("This is a demo warning!");
    // throw Error;
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title="Click Me!" onPress={handlePress} />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});