import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// TODO: IS THIS A BAD STYLE?
import * as AuthActions from '../actions/auth';

class Home extends Component {
  render() {
    return (
        <div id="app-container">
          <div id="header">
            <div className="container">
              <div className="note">
                Bootstrap
              </div>
            </div>
          </div>
          <div id="main">
            <div className="container">
              <div className="row row-style">
                <div className="col-xs-6">
                  <div className="is">
                    Is
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="row another-row-style">
                    <div className="col-xs-3 col-style">
                      <div className="very">
                        Very
                      </div>
                    </div>
                    <div className="col-xs-9">
                      <div className="fun">
                        Fun
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
