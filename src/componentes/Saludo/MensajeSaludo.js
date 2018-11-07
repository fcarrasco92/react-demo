import React, { Component } from "react";

class MensajeSaludo extends Component {
  render() {
    const { nombre, message } = this.props;

    return (
      <div>
        <h1>Hola {nombre}!</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default MensajeSaludo;
