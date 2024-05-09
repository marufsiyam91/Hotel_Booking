import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import TourContextProvider from "./Context/TourContext.jsx";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TourContextProvider>
      <RouterProvider router={Routes}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
        <ToastContainer/>
      </RouterProvider>
    </TourContextProvider>
  </React.StrictMode>
);
