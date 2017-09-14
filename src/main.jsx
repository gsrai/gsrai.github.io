import React from 'react';
import { render } from 'react-dom';
import {  HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.jsx';

const app = document.getElementById('app-target');

const main = () => {
  render(
    <Router>
      <Route path="/" component={Home}>
      </Route>
    </Router>,
    app);
};

document.addEventListener('DOMContentLoaded', main);