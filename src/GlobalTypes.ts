import { IrootStore } from "./RootStore/RootStore";
import { RouteProp } from "@react-navigation/native";

export interface rootPageTypes {
  rootStore: IrootStore;
}

export interface routeTypes {
  rootStore?: IrootStore;
  route: RouteProp<Record<string, object | undefined>, "splash">;
  navigation: any;
}
