const IndividualComment = ({ comment }) => {
  return (
    <div className="individual-comment_container">
      <p>{comment.author.username}</p>
      <p>{comment.text}</p>
      <p>{comment.createdAt_formatted}</p>
    </div>
  )
}

const ArticleComments = ({ comments }) => {
  if (!comments.length) {
    return (
      <div>
        No comments(yet)...
      </div>
    )
  } else {
    return (
      <div className="comments_container">
        {
          comments.map((el) => {
            return (
              <IndividualComment key={el._id} comment={el} />
            )
          })
        }
      </div>
    )
  }
}

export default ArticleComments;