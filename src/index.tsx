import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './core/service-worker';
import { GlobalStyles } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <GlobalStyles />
      <div>abc 123</div>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
