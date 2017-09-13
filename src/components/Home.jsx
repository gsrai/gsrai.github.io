import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProjectsContainer from './ProjectsContainer.jsx';
import About from './About.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'projects',
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
            desc: 'A puzzle game that I created to learn React Native and publish an app on both the google play store and the apple app store.',
            imgsrc: 'assets/wordenvy.jpg',
            links: [
              {
                href: 'https://play.google.com/store/apps/details?id=com.wordenvy',
                title: 'Google Play'
              },
              {
                href: 'https://itunes.apple.com/us/app/word-envy/id1266290411',
                title: 'App Store'
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
        age: '23 Years old',
        occupation: 'Software Developer',
        location: 'London, UK'
      }
    };
  }

  navigationCallback = (newTab) => {
    this.setState({
      currentTab: newTab
    });
  }

  renderMain = () => {
    const { currentTab, projectsModel, aboutModel }  = this.state;
    switch(currentTab) {
      case 'projects':
        return(<ProjectsContainer projectsModel={projectsModel} />);
      case 'about':
        return(<About {...aboutModel} />);
      case 'blog':
        return(<h2>In Development</h2>);
      default:
        return(<p>Oops something went wrong!</p>);
    }
  }

  render() {
    return (
      <div>
        <Header tabName={this.state.currentTab}
                onNavChange={this.navigationCallback.bind(this)} />
        {this.renderMain()}
        <Footer />
      </div>
    );
  }
}