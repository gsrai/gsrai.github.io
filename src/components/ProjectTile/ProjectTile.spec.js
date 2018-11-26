import { shallow } from 'enzyme'
import React from 'react'
import ProjectTile from './index'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const props = {
      title: 'Some Totally Awesome Project',
      description: 'I did some stuff.',
      imgsrc: 'assets/foo.jpeg',
      links: [{ href: 'some/url', title: 'Github' }]
    }
    const wrapper = shallow(<ProjectTile {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
