import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Gagondeep Srai</h1>
          <nav>
            <ul>
              <li className={'active'}><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }

}