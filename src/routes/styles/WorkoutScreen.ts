import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const WorkoutScreenStyles = StyleSheet.create({
  root: { ...GlobalStyles.centerAll, flex: 1, width: "100%" },
  text: { ...GlobalStyles.fontHero, marginBottom: 40 },
  btnStart: {
    backgroundColor: "#8E3A89",
    width: 100,
    height: 100,
    scaleX: 1.5,
    scaleY: 1.5,
    borderRadius: 300,
    fontSize: 24,
  },
  stepText: {
    ...GlobalStyles.fontHero,
  },
});

export default WorkoutScreenStyles;
