import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  FormContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 30,
    alignItems: "center",
  },
  Form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  FormLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 36,
  },
  FormInput: {
    height: 50,
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f2f2f2",
    paddingLeft: 10,
    marginLeft: 24,
  },
  CalculatorButton: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff1090",
    width: "90%",
    paddingVertical: 16,
    marginLeft: 24,
    marginTop: 30,
  },
  TextCalculatorButton: {
    fontSize: 20,
    color: "#fff",
  },
  ErrorMessage: {
    fontSize: 12,
    color: "#f01010",
    fontWeight: "bold",
    paddingLeft: 24,
  },
});

export default styles;
