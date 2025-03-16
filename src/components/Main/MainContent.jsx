import { useEffect, useState, useContext } from "react";
import { getPosts, getUsers } from "../../utils/http.js";
import Posts from "./Posts";
import { MyBlogContext } from "../../context/blog-contex.jsx";

function MainContent() {
  // to remember the state of posts and users
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // get login user from local storage session
  const loginedUser = localStorage.getItem("loginedUser");

  // posts filtered by tag are received by using useContext
  const { postsByTag } = useContext(MyBlogContext);

  useEffect(() => {
    // fetch posts from db.json(json-server)
    async function getBlogPosts() {
      const results = await getPosts();

      setPosts(results);
    }

    // fetch users from db.json(json-server)
    async function getUsersProfile() {
      const response = await getUsers();

      setUsers(response);
    }

    getUsersProfile();

    getBlogPosts();
  }, []);

  // validate user log in or not
  const filteredPosts = loginedUser == null ? posts.slice(0, 10) : posts;

  return (
    <>
      <Posts
        // validation for posts that are searched by tag and filtered posts
        posts={
          !postsByTag || postsByTag.length <= 0 ? filteredPosts : postsByTag
        }
        users={users}
      />
    </>
  );
}

export default MainContent;
