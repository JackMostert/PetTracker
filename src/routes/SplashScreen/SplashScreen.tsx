import * as React from "react";
import { Text, View } from "react-native";
import { inject, observer } from "mobx-react";
import SplashScreenStyles from "../styles/SplashScreen";

@inject("rootStore")
@observer
export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={SplashScreenStyles.root}>
        <Text style={SplashScreenStyles.text}>Splash Screen</Text>
      </View>
    );
  }
}
