import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

export default class Header extends React.Component {
  getPath = () => window.location.hash.slice(2)

  isActive = (isActive) => {
    const normalClassname = 'paper-btn margin'
    return isActive ? normalClassname + ' btn-success' : normalClassname
  }

  render() {
    const activeTab = this.getPath()
    return (
      <React.Fragment>
        <header className='row flex-center'>
          <h2>Gagondeep Srai</h2>
        </header>
        <div className='row flex-center'>
          <Link className={this.isActive(activeTab === '')} to='/'>Projects</Link>
          <Link className={this.isActive(activeTab === 'about')} to='/about'>About</Link>
          <Link className={this.isActive(activeTab === 'blog')} to='/blog'>Blog</Link>
        </div>
      </React.Fragment>
    )
  }
}
