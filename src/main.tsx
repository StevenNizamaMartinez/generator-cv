import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { CvProvider } from "./context/CvContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CvProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CvProvider>
  </React.StrictMode>
);
