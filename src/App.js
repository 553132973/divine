import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/home";
import Divine from "./pages/divine";
import Weather from "./pages/weather";

const App = ({ history }) =>
  <Router history={history}>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route  path="/divine"  component={Divine} />
      <Route  path="/weather"  component={Weather} />
    </Switch>
  </Router>;
App.propTypes = {
  history: PropTypes.shape({}).isRequired
};
export default App;
