// import "./assets/scss/style.scss";
import React, { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const container = document.getElementById("root");
const defaultTheme = createTheme();
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Suspense fallback="">
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
