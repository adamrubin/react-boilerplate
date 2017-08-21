import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import history from './history';

import { Home } from './containers';

import './index.css';

const loggerMiddleware = createLogger();
const store = createStore(reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);