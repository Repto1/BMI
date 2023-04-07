import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ResultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 60,
    borderRadius: 15,
    alignItems: "center",
    width: "90%",
  },
  ImcNumber: {
    fontSize: 48,
    color: "#ff1090",
    fontWeight: "bold",
  },
  Information: {
    alignItems: "center",

    fontSize: 18,
    color: "#ff1090",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  shareButton: {
    backgroundColor: "#10f599",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  shareText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f0f0f0",
  },
});

export default styles;
