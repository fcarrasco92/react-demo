import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class FormaSaludo extends Component {
  alEnviarForma = e => {
    let datos = {};

    const nombre = e.target.nombre.value;
    const message = e.target.message.value;
    e.preventDefault();
    if (typeof nombre === "string" && nombre.length > 0) {
      datos.nombre = nombre;
      e.target.nombre.value = "";
      e.target.message.value = "";
    }
    if (typeof message === "string" && message.length > 0) {
      datos.message = message;
      e.target.message.value = "";
    }
    this.props.alObtenerNuevoSaludo(datos);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.alEnviarForma}>
          <FormGroup>
            <ControlLabel>Nombre</ControlLabel>
            <FormControl type="text" id="nombre" name="nombre" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Mensaje</ControlLabel>
            <FormControl
              componentClass="textarea"
              id="message"
              name="message"
              placeholder="textarea"
            />
          </FormGroup>
          <Button type="submit">Saludar</Button>
        </form>
      </div>
    );
  }
}

export default FormaSaludo;
