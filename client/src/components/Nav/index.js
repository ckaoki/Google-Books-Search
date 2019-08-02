// Import react
import React, { Component } from "react";
// Import react router library for links
import { Link } from "react-router-dom";
// Import css style sheet
import "./style.css";

// Define Nav component with attributes and links
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  // define with of component
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  // toggle whether nav bar is collapsed or not.
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  // on component load add event listner to window resize  
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // on component unload destroy event listner
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  // render navbar
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* link to home page */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* button to toggle collapse of navbar */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* on this.state.open change show or collapse nav bar*/}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
