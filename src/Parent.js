import React from "react";
import Child from "./Child";

//this code is based on the child to parent components
class Parent extends React.Component {
  state = {
    msg: "",
  };
  handleCallback = (childData) => {
    this.setState({ msg: childData });
  };

  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>{msg}</h1>
        <Child parentCallback={this.handleCallback} />
      </div>
    );
  }
}

//this code is parent to child components

// const Parent =()=>{
// const data='Hello Everyone';
// return(
//     <div>
//         <Child data={data}/>
//     </div>
// );

// }
export default Parent;
