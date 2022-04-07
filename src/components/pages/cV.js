import React, { Component } from "react";
import Nav from "../headerComponent/nav";

class Cv extends Component {
  render() {
    return (

        <div>
            <Nav></Nav>
        <img class="cv" src={require('../../Assets/img/cv2.png')} alt="qsd"></img>
        </div>
    
    );
  }
}

export default Cv;
