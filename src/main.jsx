import React from 'react';
import { render } from 'react-dom';

const app = document.getElementById('app-target');

const main = () => {
  render(<h1>React YO!</h1>, app);
};

document.addEventListener('DOMContentLoaded', main);