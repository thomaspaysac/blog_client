import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleBody from "../components/ArticleBody";
import ArticleComments from "../components/ArticleComments";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const ArticleFull = () => {
  const [article, setArticle] = useState();
  const [error, setError] = useState(false);

  const { id } = useParams();

  const fetchArticle = async () => {
    const res = await fetch(`https://blogapi-production-5dee.up.railway.app/posts/${id}`);
    if (res.status >= 400) {
      setError(true);
    }
    const data = await res.json();
    setArticle(data);
  };

  const fullarticle = () => {
    if (error) {
      return (
        <>
          <Header />
          <main>
            Error: article not found.
          </main>
          <Footer />
        </>
      )
    }

    if (!article) {
      return (
        <>
          <Header />
          <main>
            Loading article...
          </main>
        </>
      )
    } else {
      return (
        <>
          <Header />
          <main className="post-full">
            <h3 className="page-title">Article</h3>
            <ArticleBody blogPost={article.post} />
            <hr />
            <ArticleComments comments={article.comments} />
          </main>
          <Footer />
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