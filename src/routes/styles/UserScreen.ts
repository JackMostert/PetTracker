import { StyleSheet } from "react-native";

const UserScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 500,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text1: {
    fontSize: 23,
    marginTop: 30,
  },
});

export default UserScreenStyles;
