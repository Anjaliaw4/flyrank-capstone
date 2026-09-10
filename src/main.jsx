import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./contact.css";
import App from "./ContactApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
