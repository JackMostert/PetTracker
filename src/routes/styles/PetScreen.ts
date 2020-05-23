import { StyleSheet } from "react-native";

const PetScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text1: {
    marginBottom: 30,
    marginTop: 60,
    fontSize: 24,
  },
});

export default PetScreenStyles;
