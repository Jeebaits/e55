import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./component/Button";
import Section1 from "./component/Section1";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        {/* put the components here */}
        <App/>
        <Button/>
        <Section1/>
    </div>
);