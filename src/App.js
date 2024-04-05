// import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Custome Hooks
import { DarkThemeProvider } from "./CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import Navbar from "./Components/Navbar/Index";
import Index from "./Components/Index/Index";
import Services from "./Components/Services/Index";
import Products from "./Components/Products/ProductsPage";
import SingleProduct from "./Components/Products/SingleProductPage";
import Portfolio from "./Components/Portfolio/Index";
import Team from "./Components/Team/Index";
import Contact from "./Components/Contact/Index";
import Buttons from "./Components/Buttons/Index";
import NotFound from "./Components/NotFound/Index";

// Import App Main Sass File
import "./App.scss";

function App() {
  return (
    <DarkThemeProvider>
      <Router>
        <Navbar />
        <Buttons />

        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Index />} />
          <Route
            path={`${process.env.PUBLIC_URL}/products`}
            element={<Products />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/products/:id"}
            element={<SingleProduct />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/services`}
            element={<Services />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/portfolio`}
            element={<Portfolio />}
          />
          <Route path={`${process.env.PUBLIC_URL}/team`} element={<Team />} />
          <Route
            path={`${process.env.PUBLIC_URL}/contact`}
            element={<Contact />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </DarkThemeProvider>
  );
}

export default App;
