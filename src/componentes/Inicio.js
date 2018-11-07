import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class Inicio extends Component {
  render() {
    return (
      <div>
        <h1>Page Index </h1>
        <div>
          <form>
            <FormGroup>
              <ControlLabel>UserName</ControlLabel>
              <FormControl type="text" id="txtUserName" name="txtUserName" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="text" id="txtPassword" name="txtPassword" />
            </FormGroup>
            <Button type="submit">Sign-In</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Inicio;
