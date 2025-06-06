import React, { useEffect, useState } from "react";
import { deletePost } from "../../utils/http";

const styles = {
  container: "w-full border-b",
  innerContainer: "max-w-11/12 mx-auto",
  postWrapper: "p-5",
  author: "text-md capitalize",
  metaInfo: "text-[12px] text-[#626262] font-semibold",
  title: "text-2xl font-bold mt-4",
  content: "text-sm/6 indent-8 text-justify line-clamp-3 my-3",
  full_content: "text-sm/6 indent-8 text-justify my-3",
  profileImage: "rounded-full border-1 inline me-1",
  button: "text-[#626262] hover:text-black underline cursor-pointer mt-2",
  moreButtonContainer: "w-full flex justify-end items-center mb-2",
  moreButton: "font-bold w-full text-end cursor-pointer",
  moreButtonWrapper: "relative text-[12px] w-[50px]",
};

function Posts({ posts, users, loginedUser }) {
  const [blogPosts, setBlogPosts] = useState(posts);
  const [viewStates, setViewStates] = useState({}); // state for toggling view details
  const [moreButtons, setMoreButtons] = useState({}); // state for toggling more buttons

  // parse loginedUser json
  const loginUser = JSON.parse(loginedUser);

  // useEffect for updating blogPosts changes
  useEffect(() => {
    setBlogPosts(posts);
  }, [posts]);

  const toggleView = (postId) => {
    setViewStates((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle the specific post
    }));
  };

  // function for handling toggle more buttons (edit and delete)
  function toggleMoreButtons(postId) {
    setMoreButtons((prev) => ({
      [postId]: !prev[postId],
    }));
  }

  // function for handling delete post
  function handleDeletePost(postId) {
    const filteredPosts = deletePost(postId);
    setBlogPosts(filteredPosts);
  }

  return (
    <div>
      {blogPosts.map((post) => (
        // container
        <div key={post.id} className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.postWrapper}>
              <div className={styles.moreButtonContainer}>
                <div className={styles.moreButtonWrapper}>
                  <button
                    className={styles.moreButton}
                    onClick={() => toggleMoreButtons(post.id)}
                  >
                    :
                  </button>
                  {moreButtons[post.id] && (
                    <ul className="absolute bg-white shadow-md rounded-md mt-1">
                      <li className="border-b border-gray-200 hover:bg-amber-50 py-2 px-3">
                        <button
                          className={`w-full ${
                            loginUser !== null &&
                            loginUser.user_id === post.author_id
                              ? "cursor-pointer"
                              : "cursor-not-allowed disabled"
                          }`}
                          disabled={
                            !(
                              loginUser !== null &&
                              loginUser.user_id === post.author_id
                            )
                          }
                          onClick={() => console.log("Edit")}
                        >
                          Edit
                        </button>
                      </li>
                      <li className="cursor-pointer hover:bg-amber-50 py-2 px-3">
                        <button
                          className={`w-full ${
                            loginUser !== null &&
                            loginUser.user_id === post.author_id
                              ? "cursor-pointer"
                              : "cursor-not-allowed disabled"
                          }`}
                          disabled={
                            !(
                              loginUser !== null &&
                              loginUser.user_id === post.author_id
                            )
                          }
                          onClick={() => handleDeletePost(post.id)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

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
                        <span className={styles.author}>{user.name}</span>
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
                  <span className="capitalize" key={index}>
                    #{tag}
                  </span>
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
