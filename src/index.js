import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfigProvider } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9D9DAF",
          colorPrimaryHover: "#F85F35",
          colorText: "#9D9DAF",
          fontFamily: "Outfit",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
