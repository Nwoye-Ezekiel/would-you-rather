import { Component } from "react";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
import { Redirect } from "react-router-dom";

class Layout extends Component {
  render() {
    const { authedUser } = this.props;

    if (!authedUser) {
      return <Redirect to="/login" />;
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

export default connect(mapStateToProps)(Layout);
