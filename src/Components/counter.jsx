import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl : 'https://picsum.photos/200'
  };

  // styles = {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // };

  render() {
    // let classes = this.getBadgeClasses(); // we are calling directly

    return (
      //  <div> instead div tag we are using React.Fragement
      <React.Fragment>
        {/* <h1>Hello World</h1> */}
        {/* <span>{this.state.count}</span> */}
        {/* <span>{2+4}</span> */}
        {/* <span>{this.formatCount()}</span> */}
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* <span style = {{fontSize :30}} className ="badge badge-primary m-2">{this.formatCount()}</span> */}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment </button>
        {/* <img src ={this.state.imageUrl}alt= ""/> */}
        {/* //    </div>  */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  

  //   formatCount(){

  //     return this.state.count === 0? "Zero" : this.state.count
  //   }

  //Above similar code we can also write in
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    //  return count === 0? <h1>Zero</h1> : count
  }
}

export default Counter;
