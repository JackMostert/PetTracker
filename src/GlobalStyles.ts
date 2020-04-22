import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  centerAll: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fontNormal: {
    fontSize: 16,
    fontFamily: "sans-serif",
  },
  fontHero: {
    fontSize: 42,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 2,
  },
});

export default GlobalStyles;
