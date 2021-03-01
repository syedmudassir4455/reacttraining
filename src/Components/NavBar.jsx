import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
import Customers from "./Customers";
import Rentals from "./rentals";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            React Application
          </NavLink>
          {/* <h1 style={{float:"left"}}>Clicked:{this.props.countValue}</h1> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " aria-current="page" to="movies">
                Movies
              </NavLink>
              <NavLink className="nav-link" to="customers">
                Customers
              </NavLink>
              <NavLink className="nav-link" to="rentals">
                Rentals
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
