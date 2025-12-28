import { StyleSheet, Text, View } from "react-native";
import { TestColors } from "../theme/colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: TestColors.dark[200],
  },
});
