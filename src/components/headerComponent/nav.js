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
          <ul class="centerUL">
            <li><a href="#/info">INFO</a></li>
            <li><a href="#/home">HOME</a></li>
            <li><a href="#/cv">C.V.</a></li>
            <li><a href="mailto:lambert.e.pro@gmail.com " target="_top">CONTACT</a></li>
          </ul>

         
       
        </div>
      </div>
    );
  }
}

export default Nav;
