import { Pedometer } from "expo-sensors";
import { observable, action, computed } from "mobx";

export class StepCount {
  @observable
  public isPedometerAvailable: string = "checking";

  @observable
  public pastStepCount: number = 0;

  @observable
  public currentStepCount: number = 0;

  private subscription: any;

  @action
  public subscribe = () => {
    this.subscription = Pedometer.watchStepCount((result) => {
      this.currentStepCount = result.steps;
    });
  };

  public unsubscribe = () => {
    this.subscription.remove();
    this.subscription = undefined;
  };

  @computed
  public get stepCount() {
    return this.currentStepCount;
  }
}
