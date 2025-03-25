import { useState, useContext } from "react";
import { Link } from "react-router";
import { MyBlogContext } from "../../context/blog-contex";
import { createPost } from "../../utils/http";

function NewPost() {
  const { posts } = useContext(MyBlogContext);
  const loginedUser = JSON.parse(localStorage.getItem("loginedUser")) || null;
  const lastPostId =
    posts.length > 0 ? parseInt(posts[posts.length - 1].id, 10) + 1 : 1;

  const [newPost, setNewPost] = useState(() => ({
    id: `${lastPostId}`,
    title: "",
    content: "",
    tags: [],
    author: loginedUser?.name || "Unknown",
    author_id: loginedUser?.user_id || "N/A",
    views: Math.floor(Math.random() * 1000),
    reading_time: Math.floor(Math.random() * 10) + 1 + " mins",
    created_at: new Date().toLocaleDateString("en-GB").replace(/\//g, "-"),
  }));

  function handleNewPostSubmit(e) {
    e.preventDefault();
    createPost(newPost);
    console.log(newPost);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value || "", // Ensures controlled component behavior
      [name]:
        name === "tags" ? value.split(",").map((tag) => tag.trim()) : value, // Convert tags to an array
    }));
  }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="w-3/4">
        <h1 className="text-left font-semibold text-xl underline mb-3">
          New Post
        </h1>
      </div>
      <form
        action=""
        className="w-3/4 bg-white rounded-xl shadow-xl p-7"
        onSubmit={handleNewPostSubmit}
      >
        <div className="form-group">
          <div className="mb-3">
            <img
              src={
                loginedUser !== null
                  ? loginedUser.profile_image
                  : "../public/userprofile.jpg"
              }
              width={30}
              className="rounded-full inline"
              alt="logined user photo"
            />
            <input
              name="title"
              value={newPost.title}
              type="title"
              className="w-11/12 ms-3 p-2 focus:outline-none"
              placeholder="Title..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <textarea
            value={newPost.content}
            name="content"
            id="content"
            className="w-full h-[200px] scroll-auto p-2 focus:outline-none"
            placeholder="Write your own thoughts..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-3 border-b border-gray-100 p-3">
          <label htmlFor="tags">Tags: </label>
          <input
            name="tags"
            value={newPost.tags}
            type="text"
            className="focus:outline-none px-2 py-1"
            placeholder="#Tags"
            onChange={handleChange}
          />
        </div>
        <div className="float-right mt-3 p-2">
          <button className="bg-gray-100 text-blue-700 rounded-md cursor-pointer py-1 px-2">
            <Link to={"/"}>Cancel</Link>
          </button>
          <button className="bg-blue-600 text-white rounded-md cursor-pointer ms-3 py-1 px-3">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
