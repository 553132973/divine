import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/home";
import Divine from "./pages/divine";
import List from "./pages/list";

const App = ({ history }) =>
  <Router history={history}>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route  path="/divine"  component={Divine} />
      <Route  path="/list"  component={List} />
    </Switch>
  </Router>;
App.propTypes = {
  history: PropTypes.shape({}).isRequired
};
export default App;
