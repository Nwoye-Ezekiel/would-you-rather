import "./App.css";
import { Component } from "react";
import Login from "./pages/authentication/Login";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import NewQuestion from "./pages/NewQuestion/NewQuestion";
import DisplayPoll from "./components/DisplayPoll/DisplayPoll";

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
        <Route exact component={Login} path="/login" />
        <Route exact component={Home} path="/" />
        <Route exact component={NewQuestion} path="/add" />
        {/* <Route  component={DisplayPoll} path="/questions" /> */}
        <Route exact component={DisplayPoll} path="/questions/:question_id" />
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
