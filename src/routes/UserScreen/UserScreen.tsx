import * as React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import UserScreenStyles from "../styles/UserScreen";
import { LineChart, ProgressChart } from "react-native-chart-kit";

const chartConfig = {
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
};

const data = {
  labels: ["Distance", "Time", "Cal"], // optional
  data: [0.2, 0.7, 0.2],
};

interface IUserScreenProps {}

const UserScreen: React.FunctionComponent<IUserScreenProps> = (props) => {
  return (
    <View style={UserScreenStyles.root}>
      <Image
        style={UserScreenStyles.img}
        source={{ uri: "https://randomuser.me/api/portraits/women/31.jpg" }}
      />
      <Text style={UserScreenStyles.text1}>Welcome back Natalie Wood</Text>
      <Text style={UserScreenStyles.text1}>Here is your most recent stats</Text>
      <LineChart
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wendsday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
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
        width={Dimensions.get("window").width - 40}
        height={220}
        // yAxisLabel=""
        // yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={UserScreenStyles.text1}>
        Take a look at your Progression
      </Text>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width - 40}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <Text style={UserScreenStyles.text1}></Text>
    </View>
  );
};

export default UserScreen;
