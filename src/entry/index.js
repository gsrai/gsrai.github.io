import React from 'react'
import { render } from 'react-dom'
import Home from '../components/Home'
import { HashRouter as Router } from 'react-router-dom'

const appRoot = document.getElementById('app-root')

const main = () => {
  render(
    <Router basename={process.env.PUBLIC_URL}>
      <Home />
    </Router>,
    appRoot
  )
}

document.addEventListener('DOMContentLoaded', main)
