import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchAllCampers();
  }

  loadingMessage() {
    if (this.props.loading) {
      return (
        <h2>Loading...</h2>
      );
    }
    return null;
  }

  renderCampers() {
    if (this.props.recentCampers === null) return null;
    return this.props.recentCampers.map((camper, idx) => {
      return (
        <li key={idx}>{camper.username}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Top Free Code Campers</h1>
        {this.loadingMessage()}
        <ul>
          {this.renderCampers()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ core }) => {
  return {
    allTimeCampers: core.allTimeCampers,
    recentCampers: core.recentCampers,
    loading: core.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
