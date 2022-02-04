import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Auth0ProviderContainer from "./components/Auth/auth0-provider-container";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderContainer>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Auth0ProviderContainer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
