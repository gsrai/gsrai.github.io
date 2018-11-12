import React from 'react'
import mdparse from 'snarkdown'
import PropTypes from 'prop-types'

import './blogPostView.css'

class BlogPostView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: null }
  }

  async componentWillMount() {
    const path = window.location.hash.slice(1)
    // path will be something like: /blog/posts/first_blog_post-12112018
    const [head, rest] = path.split('/').pop().split('-')
    const content = await this.getContent(`/assets/posts/${head}-${rest}.md`)
    const title = this.deriveTitle(head)
    const publishDate = this.derivePublishDate(rest)
    this.setState({ content, title, publishDate })
  }

  getContent = async (url) => {
    const res = await fetch(url)
    const text = await res.text()
    return text
  }

  deriveTitle = (titleStr) => {
    return titleStr.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
  }

  derivePublishDate = (dateStr) => {
    const day = dateStr.slice(0, 2)
    const month = dateStr.slice(2, 4)
    const year = dateStr.slice(4)
    return `${day}/${month}/${year}`
  }

  render() {
    const { content, title, publishDate } = this.state
    console.log(content)
    return (
      <React.Fragment>
        <div className='row flex-center'>
          { content ? <PostHeader title={title} publishDate={publishDate} /> : <h3>Oops something went wrong</h3>}
        </div>
        { content &&
          <div className='post-content' dangerouslySetInnerHTML={{ __html: mdparse(content) }} />}
      </React.Fragment>
    )
  }
}

const PostHeader = ({ title, publishDate }) => {
  return (
    <div className='post-header'>
      <h2>{title}</h2>
      <h6>{publishDate}</h6>
      <hr />
    </div>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired
}

export default BlogPostView
