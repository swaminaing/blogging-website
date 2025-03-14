import React, { useState } from "react";

function SearchBar() {
  const [tag, setTag] = useState("");

  return (
    <input
      type="text"
      className="w-[400px] border-1 rounded-2xl focus:outline-0 py-1 px-5"
      onChange={(e) => setTag(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default SearchBar;
