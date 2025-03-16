import React, { useState, useContext } from "react";
import { MyBlogContext } from "../../context/blog-contex";

function SearchBar() {
  const [tag, setTag] = useState("");

  const { searchedPosts } = useContext(MyBlogContext);

  function handleSearch(e) {
    const searchTerm = e.target.value;
    setTag(searchTerm);
    searchedPosts(searchTerm);
  }

  return (
    <input
      type="text"
      className="w-[400px] border-1 rounded-2xl focus:outline-0 py-1 px-5"
      onChange={handleSearch}
      placeholder="Search..."
    />
  );
}

export default SearchBar;
