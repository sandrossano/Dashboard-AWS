import React from "react";
import { render } from "react-dom";
import Dash from "./Dash";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Dash />, rootElement);
}
