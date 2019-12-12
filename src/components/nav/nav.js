import React, { Component } from "react";

class Nav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() {
    return (
      <div id="nav" className="nav">
        <div className="nav_text">
          <h1>nav component</h1>
       
        </div>
      </div>
    );
  }
}

export default Nav;
