import React, { Component } from 'react';

class Updatingstate extends Component {
    state = {
        count :0,
    };

handleIncrement =() =>{
    // this.state.count++;
 this.setState({count :this.state.count +1})
}

    render() {
        return (
          <div>
            <span className={this.getBadgeCLasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
          </div>
        );
      }
    getBadgeCLasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
      }
    
    
      formatCount() {
        let { count } = this.state;
        return count === 0 ? "Zero" : count;
      }
    }
    

 
export default Updatingstate;