import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import createStore from './store';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const store = createStore(history);

render(
  <Provider store = {store}>
    <ConnectedRouter history ={history}>
      <div>
        <Route exact path="/" component={Vote} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
