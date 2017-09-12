import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProjectTile from './ProjectTile.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = 'title';
    const desc = 'description';
    const links = [
      {
        href: '#',
        title: 'Github'
      },
      {
        href: '#',
        title: 'Reddit'
      },
      {
        href: '#',
        title: 'Demo'
      }
    ];
    return (
      <div>
        <Header />
        <main className={'main-content'}>
          <ProjectTile
            title={title}
            description={desc}
            links={links} />
          <ProjectTile
            title={title}
            description={desc}
            links={links} />
          <ProjectTile
            title={title}
            description={desc}
            links={links} />
          <ProjectTile
          title={title}
          description={desc}
          links={links} />
        </main>
        <Footer />
      </div>
    );
  }

}