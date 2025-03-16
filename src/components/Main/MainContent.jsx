import { useEffect, useState, useContext } from "react";
import { getPosts, getUsers } from "../../utils/http.js";
import Posts from "./Posts";
import { MyBlogContext } from "../../context/blog-contex.jsx";

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const loginedUser = localStorage.getItem("loginedUser");

  const { postsByTag } = useContext(MyBlogContext);

  useEffect(() => {
    async function getBlogPosts() {
      const results = await getPosts();

      setPosts(results);
    }

    async function getUsersProfile() {
      const response = await getUsers();

      setUsers(response);
    }

    getUsersProfile();

    getBlogPosts();
  }, []);

  const filteredPosts = loginedUser == null ? posts.slice(0, 10) : posts;

  return (
    <>
      <Posts
        posts={
          !postsByTag || postsByTag.length <= 0 ? filteredPosts : postsByTag
        }
        users={users}
      />
    </>
  );
}

export default MainContent;
