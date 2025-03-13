import React, { useEffect, useState } from "react";
import { getPosts } from "../../utils/http";
import Posts from "./Posts";

function MainContent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getBlogPosts() {
      const results = await getPosts();

      setPosts(results);
    }

    getBlogPosts();
  }, []);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

export default MainContent;
