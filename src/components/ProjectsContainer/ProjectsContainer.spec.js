import { shallow } from 'enzyme'
import React from 'react'
import ProjectsContainer from './index'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const props = {
      projectsModel: {
        projects: [{
          title: 'Some Totally Awesome Project',
          description: 'I did some stuff.',
          imgsrc: 'assets/foo.jpeg',
          links: [{ href: 'some/url', title: 'Github' }]
        }]
      }
    }
    const wrapper = shallow(<ProjectsContainer {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
