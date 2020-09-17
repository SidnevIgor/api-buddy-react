import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import App from './components/app';
import Header from './components/header';

ReactDOM.render(<Header/>, document.getElementById('nav'));
ReactDOM.render(<App/>, document.getElementById('root'));
