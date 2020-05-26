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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: Dimensions.get("window").width - 40,
          marginTop: 30,
          marginBottom: 30,
          backgroundColor: "#8E3A89",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "100", color: "#f0ddef" }}>
            Name
          </Text>
          <Text style={{ fontSize: 18, color: "#d4a5d1" }}>Bill</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "100", color: "#f0ddef" }}>
            Age
          </Text>
          <Text style={{ fontSize: 18, color: "#d4a5d1" }}>6 Months</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "100", color: "#f0ddef" }}>
            Level
          </Text>
          <Text style={{ fontSize: 18, color: "#d4a5d1" }}>3</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#8E3A89",
          justifyContent: "center",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18, color: "#f0ddef", fontWeight: "100" }}>
            StepPoints:
          </Text>
          <Text style={{ fontSize: 18, marginLeft: 5, color: "#d4a5d1" }}>
            3
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: Dimensions.get("window").width - 80,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "100", color: "#f0ddef" }}>
            Hunger:
          </Text>
          <Text
            style={{
              fontSize: 24,
              marginLeft: 5,
            }}
          >
            <View style={PetScreenStyles.ball}></View>
            <View style={PetScreenStyles.ball}></View>
            <View style={PetScreenStyles.ball}></View>
            <View style={PetScreenStyles.ball}></View>
            <View style={PetScreenStyles.ball2}></View>
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            width: Dimensions.get("window").width - 80,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "100", color: "#f0ddef" }}>
            Happiness:
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 5,
            }}
          >
            <View style={PetScreenStyles.ball}></View>
            <View style={PetScreenStyles.ball}></View>
            <View style={PetScreenStyles.ball2}></View>
            <View style={PetScreenStyles.ball2}></View>
            <View style={PetScreenStyles.ball2}></View>
          </Text>
        </View>
      </View>
      <Text style={PetScreenStyles.text1}>Days You've fed your pet</Text>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2017-04-01")}
        numDays={105}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={chartConfig}
      />
      <View style={{ height: 20 }}></View>
    </View>
  );
};

export default PetScreen;
