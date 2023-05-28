import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CvProvider } from "./context/CvContext.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CvProvider>
      <BrowserRouter basename="/generator-cv">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
          <Toaster />
        </LocalizationProvider>
      </BrowserRouter>
    </CvProvider>
  </React.StrictMode>
);
