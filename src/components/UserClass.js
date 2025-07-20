import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name : "Dummy Name",
        location : "Dummy Location",
      },
    },
    console.log("Child-constructor" + this.props.name);
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/VishakhaSahu05");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo : json,
    });
   console.log("Child - componentDidMount" + this.props.name);

  }
  componentDidUpdate(){
    console.log("Child - componentDidUpdate");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src = {avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@Vishakha05</h4>
      </div>
    );
  }
}

export default UserClass;
