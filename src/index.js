import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { ProductProvider } from "./provider/products/index";
import { CasamentoCartProvider } from "./provider/CasamentoCart/index";
import { FormaturaCartProvider } from "./provider/FormaturaCart/index";
import { ConfraternizacaoCartProvider } from "./provider/ConfraternizacaoCart/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CasamentoCartProvider>
          <FormaturaCartProvider>
            <ConfraternizacaoCartProvider>
              <App />
            </ConfraternizacaoCartProvider>
          </FormaturaCartProvider>
        </CasamentoCartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
