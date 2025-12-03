import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// ⭐ Force the <html> language attribute for SEO scanners
document.documentElement.lang = "en";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </HelmetProvider>
);
