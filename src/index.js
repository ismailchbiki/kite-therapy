import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ProductsProvider } from "./Components/Products/context/products_context";
import { FilterProvider } from "./Components/Products/context/filter_context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
