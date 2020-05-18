import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { inject } from "mobx-react";
import SplashScreen from "./routes/SplashScreen/SplashScreen";
import { rootPageTypes } from "./GlobalTypes";
import HomeScreen from "./routes/HomeScreen/HomeScreen";
import WorkoutScreen from "./routes/WorkoutScreen/WorkoutScreen";
const Drawer = createDrawerNavigator();

@inject("rootStore")
export default class Master extends React.Component<rootPageTypes> {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={this.props.rootStore.routeStore.initial}
        >
          <Drawer.Screen name="splash">
            {(props) => <SplashScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="WorkOut">
            {(props) => <WorkoutScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="home">
            {(props) => <HomeScreen {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="login">
            {(props) => <SplashScreen {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
