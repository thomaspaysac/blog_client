import { Link } from "react-router-dom";

const ArticleOverview = ({ blogPost }) => {
  const textPreview = blogPost.text.substring(0, 500).trim() + '...';

  return (
    <div className='post-overview'>
      <h3 className="post-overview_title">{blogPost.title}</h3>
      <div className="post-overview_metadata">published by <strong>{blogPost.author.username}</strong> on {blogPost.createdAt_formatted}
      {
        blogPost.updatedAt !== blogPost.createdAt ? <span className="post-overview_updated"> (updated {blogPost.updatedAt_formatted})</span> : null
      }
      </div>
      <div className="post-overview_text">{textPreview}</div>
      <Link to={`/post/${blogPost._id}`}>Read full article</Link>
    </div>
  )
}

export default ArticleOverview;