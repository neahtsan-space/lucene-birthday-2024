// index.tsx
// pages/_app.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from './app';

// Wrap ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

