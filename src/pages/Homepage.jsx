import { useState, useEffect } from "react";
import Article from "../components/Article";

const Homepage = () => {
  const [allPosts, setAllPosts] = useState();

  const fetchPosts = async () => {
    const res = await fetch('https://blogapi-production-5dee.up.railway.app/posts');
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
                <Article key={el._id} post={el} />
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
      {postsList()}
    </>
  )
}

export default Homepage;