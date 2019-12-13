import React, { Component } from "react";
import Nav from "../headerComponent/nav";
import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Header />
        <h1 class="centertext">Mes projets réalisés</h1>
        <div class="grid">
          <gobelet>
            <a href="https://github.com/Kuirionais/Python-Dice">Jeu de dés Lien Git=></a>
            <img
              class="resizeimg"
              src={require("../../Assets/img/Gobelet.png")}
              alt="404"
            ></img>
          </gobelet>

          <tictactoe>
            <a href="https://github.com/Kuirionais/Python-TicTacToe">Morpion Lien Git=></a>
            <img
              class="resizeimg"
              src={require("../../Assets/img/TicTacToe.png")}
              alt="404"
            ></img>
            
          </tictactoe>
          <gestionclient>
          <a href="https://github.com/Kuirionais/Ionic-Gestion-Client">Gestion Client Lien Git=></a>
            <img
              class="resizeimg"
              src={require("../../Assets/img/Gestion-Client.png")}
              alt="404"
            ></img>
          </gestionclient>
        </div>
       
      </div>
    );
  }
}

export default Homepage;
