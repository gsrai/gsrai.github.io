import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: null, error: false }
  }

  async componentWillMount() {
    try {
      const posts = await this.getPosts()
      this.setState({ posts })
    } catch (e) {
      console.error(e)
      this.setState({ error: true })
    }
  }

  getPosts = async () => {
    const endpoint = 'assets/posts/manifest.json'
    const res = await fetch(endpoint)
    const json = await res.json()
    return json.posts
  }

  render() {
    const { posts, error } = this.state
    return (
      <div>
        <div className='row flex-center'>
          { posts
            ? posts.map((post, i) => (<BlogPostCard key={i} {...post} />))
            : 'loading...' }
          { error && 'No Posts'}
        </div>
      </div>
    )
  }
}

export const BlogPostCard = ({ title, published, description, url }) => {
  /* assets/posts/ is 13 characters, -3 to remove the .md extension */
  const filename = url.slice(13).slice(0, -3)
  const linkUrl = `/blog/posts/${filename}`
  return (
    <div className='card' style={{ width: '20rem', marginBottom: '2rem' }}>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <h5 className='card-subtitle'>{published}</h5>
        <p className='card-text'>{description}</p>
        <Link className='card-link' to={linkUrl}>read more</Link>
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
