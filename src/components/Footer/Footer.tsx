import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import FooterStyles from "../style/Footer";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <View style={FooterStyles.root}>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;
