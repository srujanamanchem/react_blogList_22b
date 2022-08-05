import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-list">
      {blogsList.map(eachBlogItem => (
        <BlogItem key={eachBlogItem.id} eachBlogItem={eachBlogItem} />
      ))}
    </ul>
  )
}

export default BlogList
