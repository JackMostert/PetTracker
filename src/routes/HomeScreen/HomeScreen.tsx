import * as React from "react";
import { Text, View } from "react-native";
import { inject, observer } from "mobx-react";
import HomeScreenStyles from "../styles/HomeScreen";
import { routeTypes } from "../../GlobalTypes";
import { GetAccelerometer } from "../../components/Accelerometer/GetAccelerometer";
import { StepCount } from "../../components/StepCount/StepCount";
import { autorun, observable, action } from "mobx";

@inject("rootStore")
@observer
export default class HomeScreen extends React.Component<routeTypes> {
  private accelerometer = new GetAccelerometer();
  private stepCount = new StepCount();

  @observable
  private Axis = { x: 0, y: 0, z: 0 };

  @observable
  private steps = 0;

  @action
  componentDidMount() {
    this.accelerometer.subscribe();
    this.stepCount.subscribe();

    autorun(() => {
      this.Axis = this.accelerometer.getAxis;
      this.steps = this.stepCount.stepCount;
    });
  }

  componentWillUnmount() {
    this.accelerometer.unsubscribe();
    this.stepCount.unsubscribe();
  }

  render() {
    return (
      <View style={HomeScreenStyles.root}>
        <Text style={HomeScreenStyles.text}>Steps: {this.steps}</Text>
        <Text style={HomeScreenStyles.text}>x: {this.Axis.x}</Text>
        <Text style={HomeScreenStyles.text}>y: {this.Axis.y}</Text>
        <Text style={HomeScreenStyles.text}>z: {this.Axis.z}</Text>
      </View>
    );
  }
}
