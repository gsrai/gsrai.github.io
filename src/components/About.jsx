import React from 'react';
import PropTypes from 'prop-types';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'about-container'}>
        <div className={'about-top'}>
          <div className={'about-img-container'}>
            <img src="assets/profilepic.jpeg" alt="some image"/>
          </div>
          <div className={'about-stats'}>
            <h5>{this.props.name}</h5>
            <h5>{this.props.age}</h5>
            <h5>{this.props.occupation}</h5>
            <h5>{this.props.location}</h5>
          </div>
        </div>
        <div className={'about-main-content'}>
          <div className={'about-summary'}>
            <p>
            Hi, My name is Gagondeep and I am a Software Developer living in London.
            <br/><br/>
            I specialize in Java and Javascript FullStack development, but in my spare
            time I enjoy learning new technologies and concepts like the blockchain and machine learning.
            <br /><br />Recently in my own time I have been using Javascript to create a few Apps such as a
             mobile game in React Native and a chrome extension in React & Redux. Please check my Github account below
             to see my open source projects.
            </p>
          </div>
          <div className={'about-social-links'}>
            <ul>
              <li><a href="mailto:gagondeep.srai@gmail.com">Email</a></li>
              <li><a href="https://github.com/gsrai">Github</a></li>
              <li><a href="https://uk.linkedin.com/pub/gagondeep-srai/97/a22/265">Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};