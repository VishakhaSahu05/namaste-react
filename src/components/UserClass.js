import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
    this.state = {
      count: 0,
      count1: 2,
    };
  }
  componentDidMount(){
    console.log("Child CDM");
  }
  render() {
    console.log("Child Render");
    const { name } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            //Never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increases
        </button>
        <h2>Name:{name}</h2>
        <h3>Location:Ranchi</h3>
        <h4>Contact:@Vishakha05</h4>
      </div>
    );
  }
}

export default UserClass;
