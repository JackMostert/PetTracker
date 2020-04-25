import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const HomeScreenStyles = StyleSheet.create({
  root: { ...GlobalStyles.centerAll, flex: 1 },
  text: { ...GlobalStyles.fontHero, marginBottom: 40 },
});

export default HomeScreenStyles;
