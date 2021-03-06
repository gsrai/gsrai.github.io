import React from 'react'
import ProjectTile from '../ProjectTile'
import PropTypes from 'prop-types'

import './projectsContainer.css'

export default class ProjectsContainer extends React.Component {
  createProjectsView = (model) => {
    return model.projects.map((project, id) => {
      return (
        <ProjectTile
          key={id}
          title={project.title}
          description={project.desc}
          links={project.links} imgsrc={project.imgsrc} />
      )
    })
  }

  render() {
    return (
      <main className={'main-content'}>
        {this.createProjectsView(this.props.projectsModel)}
      </main>
    )
  }
}

ProjectsContainer.propTypes = {
  projectsModel: PropTypes.object.isRequired
}
