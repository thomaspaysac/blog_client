import { useState, useEffect } from "react";
import ArticleOverview from "../components/ArticleOverview";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

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
      <div className="slogan_container">
        <div>Science, simply explained.</div>
        <div>
          <p>Science doesn't need to be complicated!</p>
          <p>Discover new concepts that will blow your mind.</p>
        </div>
      </div>
      <main>
        <h2 className="page-title">Latest articles</h2>
        {postsList()}
      </main>
      <Footer />
    </>
  )
}

export default Homepage;