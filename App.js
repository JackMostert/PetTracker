import React from "react";
import Master from "./src/Master";
import { Provider } from "mobx-react";
import rootStore from "./src/RootStore/RootStore";

export default function App() {
  return (
    <Provider rootStore={rootStore}>
      <Master />
    </Provider>
  );
}
