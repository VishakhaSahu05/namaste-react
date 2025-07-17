import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent CDM called");
  }
  render(){
    console.log("Parent Render");
    return (
    <div>
      <h1>About</h1>
      <h2>This is NamasteDev WebSeries</h2>
      <UserClass name = {"VishakhaC"}/>
      <UserClass name = {"Suhana"}/>
    </div>
  );

  }
}
export default About;
