import { shallow } from 'enzyme'
import React from 'react'
// import { MemoryRouter, Link } from 'react-router-dom'
import Blog, { BlogPostCard } from './index'

describe('Component Rendering', () => {
  test('Blog component should render correctly', () => {
    const wrapper = shallow(<Blog />)
    expect(wrapper).toMatchSnapshot()
  })

  test('BlogPostCard component should render correctly', () => {
    const props = {
      title: 'why we moved from language x to language y',
      published: '22/11/2018',
      description: 'We stopped using language x, now we use language y, you should do the same.',
      url: 'some/url'
    }
    const wrapper = shallow(<BlogPostCard {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

// describe('Component Behavior', () => {
//   test('renders Links correctly', () => {
//     const wrapper = mount(
//       <MemoryRouter>
//         <Header />
//       </MemoryRouter>
//     )

//     const linksTo = wrapper.find(Link).map(l => l.props().to)
//     expect(linksTo).toEqual(['/', '/about', '/blog'])
//   })
//   test('Active link should have correct className', () => {
//     const classname = '.btn-success'
//     const wrapper = mount(
//       <MemoryRouter>
//         <Header />
//       </MemoryRouter>
//     )

//     expect(wrapper.find(classname).exists()).toBe(true)
//   })
// })
