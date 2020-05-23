import * as React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import PetScreenStyles from "../styles/PetScreen";
import { ContributionGraph } from "react-native-chart-kit";

const chartConfig = {
  backgroundColor: "#8E3A89",
  backgroundGradientFrom: "#8E3A89",
  backgroundGradientTo: "#8E3A89",
  decimalPlaces: 2,
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

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];

interface IPetScreenProps {}

const PetScreen: React.FunctionComponent<IPetScreenProps> = (props) => {
  return (
    <View style={PetScreenStyles.root}>
      <Image
        style={PetScreenStyles.img}
        source={require("../../Media/Snake.gif")}
      />
      <Text style={PetScreenStyles.text1}>Days You've fed your pet</Text>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2017-04-01")}
        numDays={105}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default PetScreen;
