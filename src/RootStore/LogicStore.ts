import { observable, action } from "mobx";
import * as SecureStore from "expo-secure-store";

class LogicStore implements ILogicStore {
  constructor() {}

  private storage: any;

  public saveToDataBase = (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  };

  public getFromDataBase = (key: string) => SecureStore.getItemAsync(key);
}

const logicStore: ILogicStore = new LogicStore();
export default logicStore;

export interface ILogicStore {
  saveToDataBase: (key: string, value: string) => void;
  getFromDataBase: (key: string) => Promise<any>;
}
