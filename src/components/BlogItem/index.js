import './index.css'

const BlogItem = props => {
  const {eachBlogItem} = props
  const {title, description, publishedDate} = eachBlogItem
  return (
    <li className="blog-item">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
