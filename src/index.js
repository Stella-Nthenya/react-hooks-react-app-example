import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// react-dom package
// It takes in two arguments:

// A React component to render (typically, we'll render our top-level App component here).
// A DOM element where we want that component to be rendered (by convention, a div with the ID of root).
ReactDOM.render(<App />, document.getElementById("root"));
