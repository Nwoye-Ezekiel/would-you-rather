import "./App.css";
import { Component } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./Redux/actions/initialData";
import NewQuestion from "./pages/NewQuestion/NewQuestion";
import DisplayPoll from "./components/PollComponents/DisplayPoll/DisplayPoll";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Layout from "./components/Layout/Layout";
import Page404 from "./components/Page404/Page404";
import { Switch } from "react-router";

class App extends Component {
  // dispatches the async action creator involing an API call after the App component has mounted
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    // displays the loading screen while there's an asynchronous API request
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact component={Login} path="/login" />
            <Route exact component={Home} path="/home" />
            <Route exact component={NewQuestion} path="/add" />
            <Route
              exact
              component={DisplayPoll}
              path="/questions/:question_id"
            />
            <Route exact component={LeaderBoard} path="/leaderboard" />
            <Route Route component={Page404} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

// retrieves the loading data from the redux state
const mapStateToProps = ({ loading }) => {
  return {
    loading,
  };
};

export default connect(mapStateToProps)(App);
