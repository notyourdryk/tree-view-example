import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./style.css";

const mountPoint = document.getElementById("app");
const root = createRoot(mountPoint);

root.render(<App />);