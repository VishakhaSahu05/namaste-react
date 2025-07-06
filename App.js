import React from "react";
import ReactDOM from "react-dom/client";
const Title = () =>(
  <h1 className = "head" tabIndex="5">
    Namaste-React using JSX
  </h1>
)
const number = 1000;
//Component composition
const HeadingComponent = () => (
  <div id="container">
    {number}
    {Title()}
    <Title/>
    <Title></Title> {/* all are same */}
    <h1 className="heading">Namaste-React using Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
