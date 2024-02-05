import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./component/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        {/* put the components here */}
        <App/>
        <Button/>
    </div>
);