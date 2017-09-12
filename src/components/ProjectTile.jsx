import React from 'react';
import PropTypes from 'prop-types';

export default class ProjectTile extends React.Component {
  constructor(props) {
    super(props);
  }

  createList = (items) => {
    return items.map((i, id) => {
      return (<li key={id}><a href={i.href}>{i.title}</a></li>);
    });
  }

  render() {
    return (
      <div className={'project-tile-container'}>
        <img src="" alt="some image"/>
        <div className={'project-tile-info'}>
          <div className={'project-tile-title'}>
            <h4>{this.props.title}</h4>
          </div>
          <div className={'project-tile-desc'}>
            <p>{this.props.description}</p>
          </div>
          <div className={'project-tile-links'}>
            <ul>
              {this.createList(this.props.links)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};