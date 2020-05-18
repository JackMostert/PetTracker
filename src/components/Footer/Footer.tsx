import * as React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import FooterStyles from "../style/Footer";
import { Icon } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import rootStore from "../../RootStore/RootStore";
import { runInAction } from "mobx";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <View style={FooterStyles.root}>
      <Button
        icon={
          <View style={{ paddingRight: 10 }}>
            <FontAwesome5 name="meteor" size={27} color="white" />
          </View>
        }
        containerStyle={{ flex: 1 }}
        buttonStyle={{
          height: "100%",
          borderRadius: 0,
          backgroundColor: "#8E3A89",
        }}
        title="Your Stats"
        onPress={() => {
          runInAction(() => {
            rootStore.routeStore.tabRoute = "user";
          });
        }}
      />
      <Button
        icon={
          <View style={{ paddingRight: 10 }}>
            <FontAwesome5 name="paw" size={27} color="white" />
          </View>
        }
        containerStyle={{ flex: 1 }}
        buttonStyle={{
          height: "100%",
          borderRadius: 0,
          backgroundColor: "#8E3A89",
        }}
        title="Pet Stats"
        onPress={() => {
          runInAction(() => {
            rootStore.routeStore.tabRoute = "pet";
          });
        }}
      />
    </View>
  );
};

export default Footer;
