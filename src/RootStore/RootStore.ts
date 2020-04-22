import { observable, action } from "mobx";

class RouteStore implements RouteStoreTypes {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  rootStore;

  @observable
  inital = "splash";

  @observable
  current;

  @observable
  visitedRoutes;
}

class LogicStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  rootStore;
}

class UIStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  rootStore;
}

class RootStore implements RootStoreTypes {
  routeStore;
  logicStore;
  uiStore;

  constructor() {
    this.routeStore = new RouteStore(this);
    this.logicStore = new LogicStore(this);
    this.uiStore = new UIStore(this);
  }
}

export interface RootStoreTypes {
  routeStore: RouteStoreTypes;
  logicStore: LogicStoreTypes;
  uiStore: UIStoreTypes;
}

export interface RouteStoreTypes {
  rootStore: RootStoreTypes;
  inital: string;
  current: string | undefined;
  visitedRoutes: Array<string> | undefined;
}

export interface LogicStoreTypes {
  rootStore: RootStoreTypes;
}

export interface UIStoreTypes {
  rootStore: RootStoreTypes;
}

const rootStore: RootStoreTypes = new RootStore();
export default rootStore;
