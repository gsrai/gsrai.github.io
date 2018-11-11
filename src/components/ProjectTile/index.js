import React from 'react'
import PropTypes from 'prop-types'

import './projectTile.css'

export default class ProjectTile extends React.Component {
  createList = (items) => {
    return items.map((i, id) => {
      return (<a key={id} href={i.href} className='paper-btn margin '>{i.title}</a>)
    })
  }

  render() {
    return (
      <div className='card' style={{ width: '20rem', marginBottom: '2rem' }}>
        <img src={this.props.imgsrc} alt={this.props.title} title={this.props.title} />
        <div className='card-body'>
          <h4 className='card-title'>{this.props.title}</h4>
          <p className='card-text project-desc'>{this.props.description}</p>
          <div className='project-links'>{this.createList(this.props.links)}</div>
        </div>
      </div>
    )
  }
}

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
}
