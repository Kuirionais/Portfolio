import React, { Component } from "react";
import Nav from "../headerComponent/nav";

class Cv extends Component {
  render() {
    return (
      <div class="border">
        <Nav></Nav>
        <div id="container">
          <img src={require("../../Assets/img/cv2.png")} class="centered" alt="alt" style={{ "margin-right": "10%", "margin-left": "10%" }} />
        </div>
      </div>
    );
  }
}

export default Cv;
