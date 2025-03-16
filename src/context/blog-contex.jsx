import { createContext, useEffect, useState } from "react";
import { getPosts, getUsers } from "../utils/http";

// context creation
const MyBlogContext = createContext();

export default function BlogContextProvider({ children }) {
  // to remember the state of users, posts and postsByTag
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsByTag, setPostsByTag] = useState([]);

  // side effect: calling db.json api
  useEffect(() => {
    // fetch posts from db.json(json-server)
    async function fetchPosts() {
      const results = await getPosts();
      setPosts(results);
    }

    // fetch users from db.json(json-server)
    async function getUsersProfile() {
      const response = await getUsers();

      setUsers(response);
    }

    getUsersProfile();

    fetchPosts();
  }, []);

  // function to filter the posts user searched
  function searchedPosts(searchTerm) {
    if (!searchTerm) {
      setPostsByTag(posts);
    }

    // filter posts by tag
    const filteredPosts = posts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase() === searchTerm.toLowerCase())
    );

    setPostsByTag(filteredPosts);
  }

  return (
    <MyBlogContext.Provider value={{ searchedPosts, postsByTag, posts, users }}>
      {children}
    </MyBlogContext.Provider>
  );
}

export { MyBlogContext };
