import React, { Component } from "react";
import Nav from "../headerComponent/nav";

class Info extends Component {
  render() {
    return (
      <div class="centertext">
        <Nav></Nav>
        <div>
        Désolé cette page est en construction ...
        </div>
        <br/>
        <br/>
        <img
          class="contruction"
          src={require("../../Assets/img/underconstruction.png")}
          alt="404"
        ></img>
      </div>
    );
  }
}

export default Info;
