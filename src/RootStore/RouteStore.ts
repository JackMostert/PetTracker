import { observable, action } from "mobx";

class RouteStore implements IRouteStore {
  @observable
  initial = "splash";

  @observable
  current = "splash";

  @observable
  visitedRoutes = [];

  @observable
  tabRoute: "user" | "pet" = "user";
}

const routeStore: IRouteStore = new RouteStore();
export default routeStore;

export interface IRouteStore {
  initial: string;
  current: string | undefined;
  visitedRoutes: Array<string>;
  tabRoute: "user" | "pet";
}
