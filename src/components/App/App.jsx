import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="app-container">
        {/* TITLE */}
        {/* NAVIGATION */}
        start
        {this.props.children}
        {/* FOOTER */}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionState: state.sessionState 
  };
}

export default connect(mapStateToProps, {})(App);
