// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css";

import { FilterProvider } from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <App />
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
