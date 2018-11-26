import { shallow, mount } from 'enzyme'
import React from 'react'
import { MemoryRouter, Link } from 'react-router-dom'
import Header from './index'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders Links correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const linksTo = wrapper.find(Link).map(l => l.props().to)
    expect(linksTo).toEqual(['/', '/about', '/blog'])
  })
})

describe('Component Behavior', () => {
  test('Active link should have correct className', () => {
    const classname = '.btn-success'
    const wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(wrapper.find(classname).exists()).toBe(true)
  })
})
