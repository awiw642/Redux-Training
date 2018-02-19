import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';

import Application from './components/Application';

import './index.css';

ReactDOM.render(
  <Provider>
    <Application />
  </Provider>,
  document.getElementById('root')
);
