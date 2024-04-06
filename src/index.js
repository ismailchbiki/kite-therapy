import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { SportsProvider } from "./Components/Sports/context/sports_context";
import { FilterProvider } from "./Components/Sports/context/filter_context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <SportsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </SportsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
