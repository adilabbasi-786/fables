import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import "./bootstrap4.css";

import "./custom.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cart from "./Context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cart>
      <App />
    </Cart>
  </React.StrictMode>
);

reportWebVitals();
