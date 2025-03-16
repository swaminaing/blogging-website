import React, { useState, useContext } from "react";
import { MyBlogContext } from "../../context/blog-contex";

function SearchBar() {
  // to remember the state of tag that user chose
  const [tag, setTag] = useState("");

  // searchedPosts function that will filter the posts users search
  const { searchedPosts } = useContext(MyBlogContext);

  // function for controlling and searching the input box
  function handleSearch(e) {
    const searchTerm = e.target.value;
    setTag(searchTerm);
    searchedPosts(searchTerm);
  }

  return (
    <input
      type="text"
      value={tag}
      className="w-[400px] border-1 rounded-2xl focus:outline-0 py-1 px-5"
      onChange={handleSearch}
      placeholder="Search..."
    />
  );
}

export default SearchBar;
