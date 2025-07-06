import React from "react";
import ReactDOM from "react-dom/client";
//sx=>babel transpiled it to React.createElement =>ReactElement js object =>htmlElement(render)
const jsxHeading = <h1 id ="heading">Namaste-React from jsx</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
