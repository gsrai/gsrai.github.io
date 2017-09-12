import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-container">
        <hr />
        <footer className="footer">&copy; 2017 Gagondeep Srai.</footer>
      </div>
    );
  }

}