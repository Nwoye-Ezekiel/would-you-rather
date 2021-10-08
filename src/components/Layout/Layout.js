import { Component } from "react";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
class Layout extends Component {
  render() {
    const { authedUser } = this.props;

    // user is not authenticated and location pathname is not login to enable redirecting to the login page
    if (!authedUser && this.props.history.location.pathname !== "/login") {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              initialPathname: this.props.history.location.pathname,
            },
          }}
        />
      );
    }

    // user is authenticated
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

// retrieve authedUser data from the redux state and children from the component props
const mapStateToProps = ({ authedUser }, { children }) => {
  return {
    authedUser,
    children,
  };
};

export default withRouter(connect(mapStateToProps)(Layout));
