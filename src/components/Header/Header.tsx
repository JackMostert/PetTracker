import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import HeaderStyles from "../style/Header";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";

const xml = `<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 500 132.813">
<path id="Path_1" data-name="Path 1" d="M0,0H500V132.809s-139.8-25.534-223.478-23.944S150.542,121.217,81.412,127.2,0,132.809,0,132.809Z" fill="#8e3a89"/>
</svg>
`;

interface IHeaderProps {
  currentRoute: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const navigation = useNavigation();
  return (
    <View style={HeaderStyles.root}>
      <View style={HeaderStyles.svg}>
        <SvgXml xml={xml} width="100%" height="100%" />
      </View>
      <View style={HeaderStyles.headerLeft}>
        <FontAwesome
          name="bars"
          size={37}
          color="white"
          onPress={() => {
            //@ts-ignore
            navigation.openDrawer();
          }}
        />
        <Text style={HeaderStyles.text}>
          {props.currentRoute.toLocaleUpperCase()}
        </Text>
      </View>
      <FontAwesome
        name="user"
        size={37}
        color="white"
        onPress={() => {
          //@ts-ignore
          // navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Header;
