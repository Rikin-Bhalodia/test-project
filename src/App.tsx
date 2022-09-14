import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store";
import Dashboard from "./container/dashboard/Dashboard";

const persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Dashboard />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
