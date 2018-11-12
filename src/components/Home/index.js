import React from 'react'
import { Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Header from '../Header'
import Footer from '../Footer'
import ProjectsContainer from '../ProjectsContainer'
import About from '../About'
import Blog from '../Blog'
import ErrorBoundary from '../../utils/ErrorBoundary'

import './home.css'
import BlogPostView from '../BlogPostView'

class Home extends React.Component {
  constructor(props) {
    super(props)
    const now = new Date()
    const dob = new Date(775699200000)
    const age = now.getFullYear() - dob.getFullYear()

    this.state = {
      projectsModel: {
        projects: [
          {
            title: 'Tab Manager Pro',
            desc: 'Personal project to learn the chrome extension api and solidify my React and Redux knowledge. It is available on the chrome store and the code on github.',
            imgsrc: 'assets/tabmanagerpro.png',
            links: [
              {
                href: 'https://github.com/gsrai/tab-manager-pro',
                title: 'Github'
              },
              {
                href: 'https://chrome.google.com/webstore/detail/tab-manager-pro/ebfpahimijhihjjnepkoojfpgpllbcdf',
                title: 'Chrome Store'
              }
            ]
          },
          {
            title: 'Word Envy',
            desc: 'A puzzle game that I created to learn React Native and publish an app on the google play store.',
            imgsrc: 'assets/wordenvy.jpg',
            links: [
              {
                href: 'https://play.google.com/store/apps/details?id=com.wordenvy',
                title: 'Google Play'
              }
            ]
          },
          {
            title: 'JS game clones',
            desc: 'I made Snake and Pong game clones written in es5 Javascript, I wanted to make games and learn the HTML5 canvas API.',
            imgsrc: 'assets/pong.png',
            links: [
              {
                href: 'https://github.com/gsrai/portfolio/tree/master/Pong',
                title: 'Pong'
              },
              {
                href: 'https://github.com/gsrai/portfolio/tree/master/Snake',
                title: 'Snake'
              }
            ]
          },
          {
            title: 'Personal Website and Blog',
            desc: 'I used a github site to host my own website which would present a portfolio of my work and a blog written in Javascript and uses React.',
            imgsrc: 'assets/portfolio.png',
            links: [
              {
                href: 'https://github.com/gsrai/gsrai.github.io',
                title: 'Github'
              }
            ]
          }
        ]
      },
      aboutModel: {
        name: 'Gagondeep Srai',
        age,
        occupation: 'Software Developer',
        location: 'London, UK'
      }
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  render() {
    const { projectsModel, aboutModel } = this.state
    return (
      <div className='paper'>
        <ErrorBoundary>
          <Header />
          <div className='to-top'>
            <button className='paper-btn margin' onClick={this.scrollToTop}>^</button>
          </div>
          <Route exact path='/' render={() => {
            return (<ProjectsContainer projectsModel={projectsModel} />)
          }} />
          <Route exact path='/about' render={() => {
            return (<About {...aboutModel} />)
          }} />
          <Route exact path='/blog' component={Blog} />
          <Route path='/blog/posts/*' component={BlogPostView} />
          <Footer />
        </ErrorBoundary>
      </div>
    )
  }
}

export default hot(module)(Home)
