import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  onProjectClick = (e) => {
    e.preventDefault();
    this.props.onNavChange('projects');
  }

  onAboutClick = (e) => {
    e.preventDefault();
    this.props.onNavChange('about');
  }

  onBlogClick = (e) => {
    e.preventDefault();
    this.props.onNavChange('blog');
  }

  render() {
    const activeTab = this.props.tabName;
    return (
      <div>
        <header>
          <h1>Gagondeep Srai</h1>
          <nav>
            <ul>
              <li className={activeTab === 'projects' ? 'active': ''}>
                <a href="#" onClick={this.onProjectClick} >Projects</a>
              </li>
              <li className={activeTab === 'about' ? 'active': ''}>
                <a href="#" onClick={this.onAboutClick}>About</a>
              </li>
              <li className={activeTab === 'blog' ? 'active': ''}>
                <a href="#" onClick={this.onBlogClick}>Blog</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }

}

Header.propTypes = {
  tabName: PropTypes.string.isRequired,
  onNavChange: PropTypes.func.isRequired
};