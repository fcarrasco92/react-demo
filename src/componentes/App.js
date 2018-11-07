import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Inicio from "./Inicio";
import Menu from "./Menu";
import { Saludo } from "./Saludo/index";
import Peliculas from "./Pelicula/Pelicula";
import PageNotFound from "./PageNotFound";

export class App extends Component {
  state = {
    isLogin: true
  };

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} exact />
            <Route path="/peliculas" component={Peliculas} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
