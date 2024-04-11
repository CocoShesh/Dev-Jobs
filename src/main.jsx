import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ListJobsProvider } from "./context/ListJobsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListJobsProvider>
      <App />
    </ListJobsProvider>
  </React.StrictMode>
);
