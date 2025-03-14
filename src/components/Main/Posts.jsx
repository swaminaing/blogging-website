import React, { useState } from "react";

const styles = {
  container: "w-full border-b",
  innerContainer: "max-w-11/12 mx-auto",
  postWrapper: "p-5",
  author: "text-sm font-semibold",
  metaInfo: "text-[12px] text-[#626262] font-semibold",
  title: "text-2xl font-bold mt-4",
  content: "text-sm/6 line-clamp-3 my-3",
  full_content: "text-sm/6 my-3",
  profileImage: "rounded-full border-1 inline me-1",
  button: "text-[#626262] hover:text-black underline cursor-pointer mt-2",
};

function Posts({ posts, users }) {
  const [viewStates, setViewStates] = useState({});

  const toggleView = (postId) => {
    setViewStates((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle the specific post
    }));
  };

  return (
    <div>
      {posts.map((post) => (
        // container
        <div key={post.id} className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.postWrapper}>
              {/* user profile  */}
              <div>
                {users.map((user) => {
                  if (user.user_id === post.author_id) {
                    return (
                      <div key={user.user_id} className="mb-2">
                        <img
                          src={user.profile_image}
                          width={35}
                          className={styles.profileImage}
                          alt="profile_image"
                        />{" "}
                        <span>{user.name}</span>
                      </div>
                    );
                  }
                })}
              </div>
              {/* post info  */}
              <div className={styles.metaInfo}>
                <span>{post.created_at}</span>
                <span className="mx-2">{post.reading_time}</span>
                {post.tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </div>
              {/* title  */}
              <div className={styles.title}>
                <h3>{post.title}</h3>
              </div>
              {/* content  */}
              <div
                className={
                  viewStates[post.id] ? styles.full_content : styles.content
                }
              >
                <p>{post.content}</p>
              </div>
              {/* view details button  */}
              <button
                className={styles.button}
                onClick={() => toggleView(post.id)}
              >
                {viewStates[post.id] ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
