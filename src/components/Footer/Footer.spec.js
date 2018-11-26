import { shallow } from 'enzyme'
import React from 'react'
import Footer from './index'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
