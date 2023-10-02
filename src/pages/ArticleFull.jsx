import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleBody from "../components/ArticleBody";
import ArticleComments from "../components/ArticleComments";
import Header from "../components/Header";

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
          <Header />
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