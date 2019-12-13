import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//Components
import Homepage from "./components/pages/homePage";
import Cv from "./components/pages/cV";
import Info from "./components/pages/info";

//Includes
import "./Assets/css/default.min.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/home" component={Homepage}></Route>
          <Route path="/cv" component={Cv}></Route>
          <Route path="/info" component={Info}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
