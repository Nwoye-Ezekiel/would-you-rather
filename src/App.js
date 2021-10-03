import "./App.css";
import { Component } from "react";
import Login from "./pages/authentication/Login";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Route exact component={Login} path="/" />
        <Route exact component={Home} path="/home" />
      </Router>
    );
  }
}

export default connect()(App);
