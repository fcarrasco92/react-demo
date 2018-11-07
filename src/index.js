import React from "react";
import ReactDOM from "react-dom";
import App from "./componentes/App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

ReactDOM.render(
  <App nombre="Felipe" message="este es un mensaje por parametros" />,
  document.getElementById("root")
);
