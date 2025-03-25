import { Link } from "react-router";

function NewPost() {
  const loginedUser = JSON.parse(localStorage.getItem("loginedUser")) || null;

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="w-3/4">
        <h1 className="text-left font-semibold text-xl underline mb-3">
          New Post
        </h1>
      </div>
      <form action="" className="w-3/4 bg-white rounded-xl shadow-xl p-7">
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
              alt=""
            />
            <input
              type="text"
              className="w-11/12 ms-3 p-2 focus:outline-none"
              placeholder="Title..."
            />
          </div>
        </div>
        <div>
          <textarea
            name=""
            id=""
            className="w-full h-[200px] scroll-auto p-2 focus:outline-none"
            placeholder="Write your own thoughts..."
          ></textarea>
        </div>
        <div className="mt-3 border-b border-gray-100 p-3">
          <label htmlFor="tags">Tags: </label>
          <input
            type="text"
            className="focus:outline-none px-2 py-1"
            placeholder="#Tags"
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
