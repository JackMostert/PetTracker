import { Accelerometer, ThreeAxisMeasurement } from "expo-sensors";
import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

export class GetAccelerometer {
  private subscription: any;

  @observable
  public rawAxis: any = { x: 0, y: 0, z: 0 };

  @action
  public subscribe = () => {
    Accelerometer.setUpdateInterval(16);
    this.subscription = Accelerometer.addListener((accelerometerData) => {
      this.rawAxis = accelerometerData;
    });
  };

  public unsubscribe = () => {
    this.subscription.remove();
    this.subscription = undefined;
  };

  @computed
  public get getRawAxis() {
    return this.rawAxis;
  }

  @computed
  public get getAxis() {
    let axis = { ...this.rawAxis };
    for (const key in this.rawAxis) {
      if (this.rawAxis.hasOwnProperty(key)) {
        axis[key] = Math.floor(this.rawAxis[key] * 100) / 100;
      }
    }
    return axis;
  }
}
