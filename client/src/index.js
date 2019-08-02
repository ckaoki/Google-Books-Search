// Entry point to client app
// Imports react libraries
import React from "react";
import ReactDOM from "react-dom";
// Import local files
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// renders App component into index.html element id "root"
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
