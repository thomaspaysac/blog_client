import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleBody from "../components/ArticleBody";
import ArticleComments from "../components/ArticleComments";

const ArticleFull = () => {
  const [article, setArticle] = useState();

  const { id } = useParams();

  const fetchArticle = async () => {
    const res = await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${id}`);
    const data = await res.json();
    setArticle(data);
  };

  const fullarticle = () => {
    if (!article) {
      return null;
    } else {
      return (
        <>
          <ArticleBody blogPost={article.post} />
          <ArticleComments comments={article.comments} />
        </>
        
      )
    }
  }

  useEffect(() => {
    fetchArticle();
  }, [])

  return (
    <>
      {fullarticle()}
    </>
  )
}

export default ArticleFull;