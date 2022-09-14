import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./container/dashboard/Dashboard";
import Routers from "./routes/router";
import { getAllProducts } from "./utils/api/Product";

function App() {
  return (
    <React.Fragment>
      <Routers />
    </React.Fragment>
  );
}

export default App;
