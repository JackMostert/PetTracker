import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button } from "react-native";
import { inject, observer } from "mobx-react";
import SplashScreen from "./routes/SplashScreen/SplashScreen";
import { rootPageTypes } from "./GlobalTypes";
const Drawer = createDrawerNavigator();

@inject("rootStore")
export default class Master extends React.Component<rootPageTypes> {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={this.props.rootStore.routeStore.inital}
        >
          <Drawer.Screen name="splash" component={SplashScreen} />
          <Drawer.Screen name="home" component={SplashScreen} />
          <Drawer.Screen name="login" component={SplashScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
