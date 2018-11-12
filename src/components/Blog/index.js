import React from 'react'
import PropTypes from 'prop-types'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: null }
  }

  async componentWillMount() {
    const posts = await this.getPosts()
    this.setState({ posts })
  }

  getPosts = async () => {
    const endpoint = 'assets/posts/manifest.json'
    const res = await fetch(endpoint)
    const json = await res.json()
    return json.posts
  }

  render() {
    const { posts } = this.state
    return (
      <div className={'blog-container'}>
        <h2>Blog Posts</h2>
        <div className='row flex-center'>
          { posts && posts.map((post, i) => (<BlogPostCard key={i} {...post} />))}
        </div>
      </div>
    )
  }
}

const BlogPostCard = ({ title, published, description, url }) => {
  return (
    <div className='card' style={{ width: '20rem', marginBottom: '2rem' }}>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <h5 className='card-subtitle'>{published}</h5>
        <p className='card-text'>{description}</p>
        <a className='card-link' href={url}>read more</a>
      </div>
    </div>
  )
}

BlogPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Blog
