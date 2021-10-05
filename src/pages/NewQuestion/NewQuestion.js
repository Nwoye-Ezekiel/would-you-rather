import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { handleAddQuestion } from "../../actions/addQuestion";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOneText: null,
    optionTwoText: null,
    toHome: false,
  };

  handleoptionOneText = (event) => {
    this.setState({ optionOneText: event.target.value });
  };

  handleoptionTwoText = (event) => {
    this.setState({ optionTwoText: event.target.value });
  };

  handleSubmit = () => {

    this.setState({ toHome: true }, () => {
      this.props.dispatch(
        handleAddQuestion({
          optionOneText: this.state.optionOneText,
          optionTwoText: this.state.optionTwoText,
          author: this.props.authedUser,
        })
      );
    });
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }
    return (
      <Layout>
        <div>
          <h3>Create a Question</h3>
          <h2>Would you rather</h2>

          <input
            value={optionOneText}
            placeholder="Enter option one here"
            onChange={this.handleoptionOneText}
          ></input>

          <br />
          <p>Or</p>
          <br />

          <input
            value={optionTwoText}
            placeholder="Enter option two here"
            onChange={this.handleoptionTwoText}
          ></input>

          <button
            onClick={this.handleSubmit}
            disabled={!(optionOneText && optionTwoText)}
          >
            submit
          </button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ authedUser, loading }, { questions }) => {
  return {
    authedUser: authedUser,
    loading: loading,
  };
};

export default connect(mapStateToProps)(NewQuestion);
