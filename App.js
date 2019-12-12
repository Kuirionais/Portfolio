import React, { Component } from "react";
import "./Assets/css/default.min.css";

//Components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homePage";
import Nav from "./components/nav/nav";
//Includes
import "./Assets/css/default.min.css";

class App extends Component {
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
      <div className="App">
       
       
        <Nav/>

        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;

