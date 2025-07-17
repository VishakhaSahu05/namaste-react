import React from "react";
import User from "./User";
import UserClass from "./UserClass";


const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is NamasteDev WebSeries</h2>
      <User name = {"Vishakha Sahu (function)"}/>
      <UserClass name = {"Vishakha Sahu (class)"}/>
    </div>
  );
};

export default About;
