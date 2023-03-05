import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ input, handleChange }) => {
  return (
    <div className="relative ">
      <input
        type="search"
        name="search"
        id="search"
        value={input}
        onChange={handleChange}
        placeholder="Search for a country…"
        className="rounded-md p-3 pl-11 w-full dark:bg-[var(--container-dark-color)] dark:text-white placeholder:text-[#C4C4C4] placeholder:dark:text-white"
      />
      <AiOutlineSearch className="absolute top-4 left-6" />
      {/* </div> */}
    </div>
  );
};

export default Search;
