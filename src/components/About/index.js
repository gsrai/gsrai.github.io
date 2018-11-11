import React from 'react'
import PropTypes from 'prop-types'

import './about.css'

export default class About extends React.Component {
  render() {
    return (
      <div className='row flex-center'>
        <div className='card' style={{ width: '20rem', marginBottom: '2rem' }}>
          <img src='assets/profilepic.jpeg' alt='profile picture' />
          <div className='card-body'>
            <div className='row flex-center'>
              <h5>{this.props.name}, {this.props.age}</h5>
              <h5>{this.props.occupation} in {this.props.location}</h5>
            </div>
            <p className='card-text project-desc'>
              Hi, My name is Gagondeep and I am a Software Developer living in London.
              <br />
              <br />
              I specialize in Java and Javascript FullStack development, but in my spare
              time I enjoy learning new technologies and concepts like the blockchain and machine learning.
              <br />
              <br />
              Recently in my own time I have been using Javascript to create a few Apps such as a
              mobile game in React Native and a chrome extension in React & Redux. Please check my Github account below
              to see my open source projects.
            </p>
            <div className='project-links'>
              <a className='paper-btn ' href='mailto:gagondeep.srai@gmail.com'>Email</a>
              <a className='paper-btn' href='https://github.com/gsrai'>Github</a>
              <a className='paper-btn' href='https://uk.linkedin.com/pub/gagondeep-srai/97/a22/265'>Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

About.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
