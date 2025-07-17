
import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    const name = this.props;
     return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location:Ranchi</h3>
            <h4>Contact:@Vishakha05</h4>
        </div>
    );

  }
}

export default UserClass;