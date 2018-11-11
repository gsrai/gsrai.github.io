import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  getPath = () => window.location.hash.slice(2)

  render() {
    const activeTab = this.getPath()
    return (
      <div>
        <header>
          <h1>Gagondeep Srai</h1>
          <nav>
            <ul>
              <li className={activeTab === '' ? 'active' : ''}>
                <Link to='/'>Projects</Link>
              </li>
              <li className={activeTab === 'about' ? 'active' : ''}>
                <Link to='about'>About</Link>
              </li>
              <li className={activeTab === 'blog' ? 'active' : ''}>
                <Link to='blog'>Blog</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}
