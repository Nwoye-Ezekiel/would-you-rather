import "./App.css";
import { Component } from "react";
import Login from "./pages/authentication/Login";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import NewQuestion from "./pages/NewQuestion/NewQuestion";
import DisplayQuestion from "./components/DisplayQuestion/DisplayQuestion"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <Router>
        <Route exact component={Login} path="/" />
        <Route exact component={Home} path="/home" />
        <Route exact component={NewQuestion} path="/new-question" />
        <Route exact component={DisplayQuestion} path="/question" />
      </Router>
    );
  }
}

const mapStateToProps = ({ loading }) => {
  return {
    loading: loading,
  };
};

export default connect(mapStateToProps)(App);
