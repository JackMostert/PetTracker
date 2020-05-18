import * as React from "react";
import { Text, View, ActivityIndicator, Button } from "react-native";
import { Image } from "react-native-elements";
import { inject, observer } from "mobx-react";
import SplashScreenStyles from "../styles/SplashScreen";
import { routeTypes } from "../../GlobalTypes";

@inject("rootStore")
@observer
export default class SplashScreen extends React.Component<routeTypes> {
  render() {
    return (
      <View style={SplashScreenStyles.root}>
        <View
          onTouchStart={() => {
            this.props.navigation.navigate("WorkOut");
            this.props.rootStore?.UpdateCurrentRoute("WorkOut");
          }}
        >
          <Image
            source={require("../../Media/Logo.png")}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <Text style={SplashScreenStyles.text}>Pet Step</Text>

        <Button
          title="Or To Stats"
          onPress={() => {
            this.props.navigation.navigate("home");
            this.props.rootStore?.UpdateCurrentRoute("home");
          }}
        />
        <Text style={SplashScreenStyles.text}></Text>

        <Text style={{ color: "grey" }}>
          Copyright All Rights Reserved 2020
        </Text>
      </View>
    );
  }
}
