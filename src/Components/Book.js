import React, { Component } from "react";
import Hello from "./Hello";
//import "./Book.css";
import './maincssfile.css'
class Book extends Component {
 
  render() { 
    return (
      <div className="person">
        <h1>Book Shop</h1>
        <h1 >2 states</h1>
        {/* <Hello /> */}
      </div>
    );
  }
}

export default Book;
