const ArticleBody = ({ blogPost }) => {
  return (
    <div className="article_body">
      <h1>{blogPost.title}</h1>
      <div className="blogpost_metadata">
        <p>published by <strong>{blogPost.author.username}</strong> on {blogPost.createdAt_formatted}</p>
        {
          blogPost.updatedAt !== blogPost.createdAt ? <p className="blogpost_edit-info">Edited {blogPost.updatedAt_formatted}</p> : null
        }
      </div>
      <div className="article_text">
        {blogPost.text}
      </div>
    </div>
  )
}

export default ArticleBody;