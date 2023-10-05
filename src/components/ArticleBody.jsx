const ArticleBody = ({ blogPost }) => {
  return (
    <div className="post_body">
      <h2 className="post_title">{blogPost.title}</h2>
      <div className="post_metadata">
        published by <strong>{blogPost.author.username}</strong> on {blogPost.createdAt_formatted}
        {
          blogPost.updatedAt !== blogPost.createdAt ? <p className="post_updated"> (updated {blogPost.updatedAt_formatted})</p> : null
        }
      </div>
      <div className="post_text">
        {blogPost.text}
      </div>
    </div>
  )
}

export default ArticleBody;