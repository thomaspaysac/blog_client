import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const IndividualComment = ({ comment }) => {
  return (
    <div className="individual-comment_container">
      <div className="individual-comment_metadata">
        <span className="comment_author">{comment.author.username}</span> 
        <span className="comment_date"> / {comment.createdAt_formatted}</span>
      </div>
      <div className="individual-comment_text">{comment.text}</div>
    </div>
  )
}

const CommentCreate = () => {
  const { id } = useParams();

  const submitComment = async (e) => {
    e.preventDefault();
    const form = document.getElementById('comment_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    data.author = localStorage.user_id;
    await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    location.reload();
  }

  if (!localStorage.logged_in) {
    return (
      <div>
        <Link to='/user/login'>Log in</Link> to post new comments.
      </div>
    )
  }

  return (
    <div className="comment_create-container">
      <div>What did you think about this article?</div>
      <form id='comment_form' onSubmit={submitComment}>
        <textarea id='text' name='text'></textarea>
        <button type='submit' className="button_primary">Submit comment</button>
      </form>
    </div>
  )
}

const ArticleComments = ({ comments }) => {
  if (!comments.length) {
    return (
      <div className="comments_section">
        <h3 className="comments_title">Thoughts</h3>
        <CommentCreate />
        No comments (yet)...
      </div>
    )
  } else {
    return (
      <div className="comments_section">
        <h3 className="comments_title">Thoughts</h3>
        <CommentCreate />
        <div className="comments_container">
          {
            comments.map((el) => {
              return (
                <IndividualComment key={el._id} comment={el} />
              )
            })
          }
        </div>
      </div>
      
    )
  }
}

export default ArticleComments;