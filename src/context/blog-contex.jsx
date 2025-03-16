import { createContext, useEffect, useState } from "react";
import { getPosts } from "../utils/http";

// context creation
const MyBlogContext = createContext();

export default function BlogContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [postsByTag, setPostsByTag] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const results = await getPosts();
      setPosts(results);
    }

    fetchPosts();
  }, []);

  // function to filter the posts user searched
  function searchedPosts(searchTerm) {
    if (!searchTerm) {
      setPostsByTag(posts);
    }

    const filteredPosts = posts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase() === searchTerm.toLowerCase())
    );

    setPostsByTag(filteredPosts);
  }

  return (
    <MyBlogContext.Provider value={{ searchedPosts, postsByTag }}>
      {children}
    </MyBlogContext.Provider>
  );
}

export { MyBlogContext };
