import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { inject, observer } from "mobx-react";
import SplashScreenStyles from "../styles/SplashScreen";
import { routeTypes } from "../../GlobalTypes";

@inject("rootStore")
@observer
export default class SplashScreen extends React.Component<routeTypes> {
  render() {
    return (
      <View style={SplashScreenStyles.root}>
        <Text style={SplashScreenStyles.text}>Splash Screen</Text>
        <Button
          title="Click to begin"
          onPress={() => {
            this.props.navigation.navigate("home");
            this.props.rootStore?.UpdateCurrentRoute("home");
          }}
        />
      </View>
    );
  }
}
