import React, { Component } from "react";
class Counterlist extends Component {
  state = {
    count: 0,
    tag :['tag1','tag2','tag3']
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatcount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            {/* {this.state.tag.map(tag => <li>{tag}</li>)}  you will get error in console please check */}

            {this.state.tag.map(tag => <li key ={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counterlist;
