import { shallow } from 'enzyme'
import React from 'react'
import BlogPostView from './index'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<BlogPostView />)
    expect(wrapper).toMatchSnapshot()
  })
})
