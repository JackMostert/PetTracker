import * as React from "react";
import { Text, View, Dimensions } from "react-native";
import { inject, observer } from "mobx-react";
import HomeScreenStyles from "../styles/HomeScreen";
import { routeTypes } from "../../GlobalTypes";
import { GetAccelerometer } from "../../components/Accelerometer/GetAccelerometer";
import { StepCount } from "../../components/StepCount/StepCount";
import { autorun, observable, action } from "mobx";
import Header from "../../components/Header/Header";
import Page from "../../components/Page/Page";
import rootStore from "../../RootStore/RootStore";
import Footer from "../../components/Footer/Footer";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import PetScreen from "../PetScreen/PetScreen";
import UserScreen from "../UserScreen/UserScreen";

@inject("rootStore")
@observer
export default class HomeScreen extends React.Component<routeTypes> {
  render() {
    return (
      <Page
        header={<Header currentRoute={rootStore.CurrentRoute || ""} />}
        footer={<Footer />}
      >
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
          {rootStore.routeStore.tabRoute === "pet" ? (
            <PetScreen />
          ) : (
            <UserScreen />
          )}
        </View>
      </Page>
    );
  }
}
