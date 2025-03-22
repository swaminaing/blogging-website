import React, { useState } from "react";

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
};

function Posts({ posts, users, loginedUser }) {
  const [viewStates, setViewStates] = useState({}); // State for toggling view details
  const [moreButtons, setMoreButtons] = useState({}); // state for toggling more buttons

  // parse loginedUser json
  const loginUser = JSON.parse(loginedUser);

  const toggleView = (postId) => {
    setViewStates((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle the specific post
    }));
  };

  // sorting posts from latest to oldest
  const sortedPosts = [...posts].sort();

  // function for handling toggle more buttons (edit and delete)
  function toggleMoreButtons(postId) {
    setMoreButtons((prev) => ({
      [postId]: !prev[postId],
    }));
  }

  return (
    <div>
      {sortedPosts.map((post) => (
        // container
        <div key={post.id} className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.postWrapper}>
              <div className="w-ful flex justify-end items-center mb-2">
                <div className="relative text-[12px] w-[50px]">
                  <button
                    className="font-bold w-full text-end cursor-pointer"
                    onClick={() => toggleMoreButtons(post.id)}
                  >
                    :
                  </button>
                  {moreButtons[post.id] && (
                    <ul className="absolute bg-white shadow-md rounded-md mt-1">
                      <li className="border-b border-gray-200 hover:bg-amber-50 py-2 px-3">
                        {loginUser !== null &&
                        loginUser.user_id === post.author_id ? (
                          <button
                            className="w-full cursor-pointer"
                            onClick={() => console.log("Edit")}
                          >
                            Edit
                          </button>
                        ) : (
                          <button
                            className="w-full cursor-not-allowed"
                            disabled
                          >
                            Edit
                          </button>
                        )}
                      </li>
                      <li className="cursor-pointer hover:bg-amber-50 py-2 px-3">
                        {loginUser !== null &&
                        loginUser.user_id === post.author_id ? (
                          <button
                            className="w-full cursor-pointer"
                            onClick={() => console.log("Delete")}
                          >
                            Delete
                          </button>
                        ) : (
                          <button
                            className="w-full cursor-not-allowed"
                            disabled
                          >
                            Delete
                          </button>
                        )}
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
