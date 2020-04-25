import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Button } from "react-native";
import { inject, observer } from "mobx-react";
import SplashScreen from "./routes/SplashScreen/SplashScreen";
import { rootPageTypes } from "./GlobalTypes";
import HomeScreen from "./routes/HomeScreen/HomeScreen";
const Drawer = createDrawerNavigator();

@inject("rootStore")
export default class Master extends React.Component<rootPageTypes> {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={this.props.rootStore.routeStore.inital}
        >
          <Drawer.Screen name="/splash">
            {(props) => <SplashScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="/home">
            {(props) => <HomeScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="/login">
            {(props) => <SplashScreen {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
