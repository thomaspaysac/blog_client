import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

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
  const { id } = useParams();
  const navigateTo = useNavigate();
  
  const submitComment = async (e) => {
    e.preventDefault();
    const form = document.getElementById('comment_form');
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);
    await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    location.reload();
  }

  if (!comments.length) {
    return (
      <div>
        No comments(yet)...
        <div>New comment:
        <form id='comment_form' onSubmit={submitComment}>
          <textarea id='text' name='text'></textarea>
          <button type='submit'>Submit comment</button>
        </form>
          
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div>New comment:
        <form id='comment_form' onSubmit={submitComment}>
          <textarea id='text' name='text'></textarea>
          <button type='submit'>Submit comment</button>
        </form>
          
        </div>
        <div className="comments_container">
          {
            comments.map((el) => {
              return (
                <IndividualComment key={el._id} comment={el} />
              )
            })
          }
        </div>
      </>
      
    )
  }
}

export default ArticleComments;