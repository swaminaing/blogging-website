import React, { useState } from "react";
import { getPosts } from "../../utils/http";

function MainContent() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Understanding JavaScript Closures",
      author: "Jane Doe",
      author_id: "1",
      views: 100,
      content:
        "JavaScript closures are a powerful concept used in software development, particularly in web development. This concept helps developers efficiently handle asynchronous programming and manage data in various applications, such as e-commerce websites and social media platforms.",
      reading_time: "5 minutes",
      created_at: "2023-01-15",
      tags: ["Technology"],
    },
  ]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <div className="post-header">
              <div>
                <span>{post.created_at}</span>
                <span>{post.reading_time}</span>
                {post.tags.map((tag) => {
                  return <span>{tag}</span>;
                })}
              </div>
            </div>
            <div className="post-title">
              <h3>{post.title}</h3>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainContent;
