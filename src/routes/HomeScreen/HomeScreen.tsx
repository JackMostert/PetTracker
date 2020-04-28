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
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 40} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={Dimensions.get("window").width - 40}
            height={220}
            yAxisSuffix="k"
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            verticalLabelRotation={30}
          />
        </View>
      </Page>
    );
  }
}
