import React from "react";
import Hamburguers from "./Components/Hamburguer";

function cabecalho() {
  return (
    <div className="header">
      <h5>Vitor's burguer</h5>
    </div>
  );
}

class Principal extends React.Component {

  render() {
    return (
      <div className="container">
        {cabecalho()}
        <div>
          <Hamburguers />
        </div>
      </div>
    );
  }
}

export default Principal;