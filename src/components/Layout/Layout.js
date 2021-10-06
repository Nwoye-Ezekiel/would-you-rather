import { Component } from "react";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
class Layout extends Component {

  render() {
    const { authedUser } = this.props;

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
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }, { children }) => {
  return {
    authedUser: authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(Layout));
