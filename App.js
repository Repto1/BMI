import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Form />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e0e5",
    paddingTop: 80,
  },
});
