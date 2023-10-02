import { useState, useEffect } from "react";
import ArticleOverview from "../components/ArticleOverview";
import Header from "../components/Header";

const Homepage = () => {
  const [allPosts, setAllPosts] = useState();

  const fetchPosts = async () => {
    const res = await fetch('https://blogapi-production-5dee.up.railway.app/posts/public');
    const data = await res.json();
    setAllPosts(data);
  }

  const postsList = () => {
    if (!allPosts) {
      return null;
    } else {
      return (
        <>
          {
            allPosts.map((el) => {
              return (
                <ArticleOverview key={el._id} blogPost={el} />
              )
            })
          }
        </>
      )
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      {postsList()}
    </>
  )
}

export default Homepage;