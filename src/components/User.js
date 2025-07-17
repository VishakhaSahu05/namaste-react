import React from "react";
import { useState } from "react";
const User = (props) =>{
    const[count] = useState(0);
    const[count1] = useState(1);
    return (
        <div className="user-card">
            <h1>Count={count}</h1>
            <h2>Count1={count1}</h2>
            <h2>Name:{props.name}</h2>
            <h3>Location:Ranchi</h3>
            <h4>Contact:@Vishakha05</h4>
        </div>
    );
};

export default User; 