import { observable, action } from "mobx";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

class LogicStore implements ILogicStore {
  constructor() {
    this.storage = new Storage({
      size: 1000,
      storageBackend: AsyncStorage,
      defaultExpires: null,
      enableCache: true,
      sync: {},
    });
  }

  private storage: any;

  public saveToDataBase = (key: string, id: string, data: object) => {
    this.storage.save({
      key: key,
      id: id,
      data: data,
    });
  };
}

const logicStore: ILogicStore = new LogicStore();
export default logicStore;

export interface ILogicStore {
  saveToDataBase: (key: string, id: string, data: object) => void;
}
