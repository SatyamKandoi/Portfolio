import React from "react";
import App from './App'
import "./index.css"
import * as ReactDOMClient from 'react-dom/client';
const root = ReactDOMClient.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );