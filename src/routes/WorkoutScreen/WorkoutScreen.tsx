import * as React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import { inject, observer } from "mobx-react";
import { routeTypes } from "../../GlobalTypes";
import WorkoutScreenStyles from "../styles/WorkoutScreen";
import Header from "../../components/Header/Header";
import rootStore from "../../RootStore/RootStore";
import { StepCount } from "../../components/StepCount/StepCount";
import { observable, action } from "mobx";

// @ts-ignore
import { ProgressCircle } from "react-native-svg-charts";

const data = {
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
};

@inject("rootStore")
@observer
export default class WorkoutScreen extends React.Component<routeTypes> {
  @observable
  private stepCounter = new StepCount();

  @observable
  private counting: boolean = false;

  @observable
  private hist: number = 0;

  @action
  private onStartStep = () => {
    this._retrieveData();
    this.counting = true;
    this.stepCounter.subscribe();
  };

  @action
  private _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("UID123");
      if (value !== null) {
        this.hist = parseFloat(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  @action
  private onStopStep = () => {
    AsyncStorage.setItem("UID123", `${this.stepCounter.stepCount}`);

    this.counting = false;
    this.stepCounter.unsubscribe();
  };

  componentWillUnmount() {
    this.stepCounter.unsubscribe();
  }

  render() {
    const steps = this.stepCounter.stepCount / this.hist;
    return (
      <View style={{ flex: 1, backgroundColor: "#fcfcfc", width: "100%" }}>
        <View style={{ height: 100 }}>
          <Header currentRoute={rootStore.CurrentRoute || ""} />
        </View>
        <View style={WorkoutScreenStyles.root}>
          <Text style={WorkoutScreenStyles.text}>Begin Workout</Text>
          {!this.counting && (
            <Button
              buttonStyle={WorkoutScreenStyles.btnStart}
              // style={WorkoutScreenStyles.btnStart}
              title="Start"
              onPress={() => {
                this.onStartStep();
              }}
            />
          )}
          {this.counting && (
            <>
              <View
                style={{
                  position: "relative",
                  width: 200,
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ProgressCircle
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  progress={steps}
                  progressColor={"rgb(134, 65, 244)"}
                />
                <Text style={WorkoutScreenStyles.stepText}>
                  {this.stepCounter.stepCount}
                </Text>
              </View>
              <Button
                buttonStyle={{}}
                title="Stop Workout"
                onPress={() => {
                  this.onStopStep();
                }}
              />
            </>
          )}
        </View>
      </View>
    );
  }
}
