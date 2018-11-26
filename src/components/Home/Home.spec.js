import { shallow } from 'enzyme'
import React from 'react'
import Home from './index'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
