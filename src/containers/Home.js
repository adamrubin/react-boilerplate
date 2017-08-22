import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeComponent from '../components/Home'

// TODO: IS THIS A BAD STYLE?
import * as AuthActions from '../actions/auth';

class Home extends Component {
  render() {
    return (
      <HomeComponent
        auth={this.props.auth}
        actions={this.props.actions}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

function mapDispatchToProps(dispatch) {
  return {
    actions: {
     authActions: bindActionCreators(AuthActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
