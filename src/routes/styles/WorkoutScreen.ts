import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const WorkoutScreenStyles = StyleSheet.create({
  root: { ...GlobalStyles.centerAll, flex: 1, width: "100%" },
  text: { ...GlobalStyles.fontHero, marginBottom: 40 },
  btnStart: {
    height: 200,
    width: 200,
    borderRadius: 300,
    fontSize: 24,
  },
  stepText: {
    ...GlobalStyles.fontHero,
  },
});

export default WorkoutScreenStyles;
