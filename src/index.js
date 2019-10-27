import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
export default Demo;
const selector = document.querySelector("#componentroot");
if (selector) ReactDOM.render(<Demo />, selector);
