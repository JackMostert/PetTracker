import { StyleSheet } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const HeaderStyles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "#8E3A89",
    width: "100%",
    justifyContent: "space-between",
    position: "relative",
    alignItems: "center",
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {},
  text: {
    ...GlobalStyles.fontNormal,
    fontSize: 24,
    marginLeft: 20,
    color: "#EEDBFE",
    fontWeight: "100",
  },
});

export default HeaderStyles;
