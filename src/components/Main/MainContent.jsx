import { useContext } from "react";
import Posts from "./Posts";
import { MyBlogContext } from "../../context/blog-contex.jsx";

function MainContent() {
  // get login user from local storage session
  const loginedUser = localStorage.getItem("loginedUser");

  // posts filtered by tag, all of the posts and all of the users are received by using useContext
  const { postsByTag, posts, users } = useContext(MyBlogContext);

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
