import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home.jsx';
const app = document.getElementById('app-target');

const main = () => {
  render(<Home />, app);
};

document.addEventListener('DOMContentLoaded', main);