import { shallow } from 'enzyme'
import React from 'react'
import About from './index'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const aboutProps = {
      name: 'John Doe',
      age: 25,
      occupation: 'Software Developer',
      location: 'Mountain View, California'
    }

    const wrapper = shallow(<About {...aboutProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})
