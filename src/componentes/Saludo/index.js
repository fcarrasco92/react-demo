import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import MensajeSaludo from "./MensajeSaludo";
import FormaSaludo from "./FormaSaludo";

export class Saludo extends Component {
  state = {
    nombre: this.props.nombre,
    message: this.props.message
  };

  manejarNuevoSaludo = datos => {
    this.setState(datos);
  };

  render() {
    const { nombre, message } = this.state;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} message={message} />
        <FormaSaludo alObtenerNuevoSaludo={this.manejarNuevoSaludo} />
      </Grid>
    );
  }
}

Saludo.defaultProps = {
  nombre: "react",
  message: "Mensaje por default"
};

export default Saludo;
