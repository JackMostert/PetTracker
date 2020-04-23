import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const SplashScreenStyles = StyleSheet.create({
  root: { ...GlobalStyles.centerAll, flex: 1 },
  text: { ...GlobalStyles.fontHero, marginBottom: 40 },
});

export default SplashScreenStyles;
