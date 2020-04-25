import { observable, action } from "mobx";

class RouteStore implements IRouteStore {
  @observable
  inital = "/splash";

  @observable
  current = "/splash";

  @observable
  visitedRoutes = [];
}

const routeStore: IRouteStore = new RouteStore();
export default routeStore;

export interface IRouteStore {
  inital: string;
  current: string | undefined;
  visitedRoutes: Array<string>;
}
