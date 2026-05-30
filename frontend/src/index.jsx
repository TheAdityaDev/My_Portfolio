// Polyfill for CommonJS exports in browser environment
if (typeof exports === "undefined") {
  window.exports = {};
}

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);