import React, { useEffect, useState } from "react";
import { getPosts, getUsers } from "../../utils/http";
import Posts from "./Posts";

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <Posts posts={posts} users={users} />
    </>
  );
}

export default MainContent;
