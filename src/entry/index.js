import React from 'react'
import { render } from 'react-dom'
import Home from '../components/Home'
import { BrowserRouter as Router } from 'react-router-dom'

const appRoot = document.getElementById('app-root')

const main = () => {
  render(
    <Router>
      <Home />
    </Router>,
    appRoot
  )
}

document.addEventListener('DOMContentLoaded', main)
