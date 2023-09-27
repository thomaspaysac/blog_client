const Article = (props) => {
  return (
    <div onClick={() => console.log(props.post)}>
      {props.post.text}
    </div>
  )
}

export default Article;