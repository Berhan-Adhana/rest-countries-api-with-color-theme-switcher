import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ input, handleChange }) => {
  return (
    <div className="relative px-[55px] h-[56px] ">
      <input
        type="search"
        name="search"
        id="search"
        value={input}
        onChange={handleChange}
        placeholder="Search for a country…"
        className="rounded-md h-full pl-11 max-w-sm dark:bg-[var(--container-dark-color)] dark:text-white focus:outline-none focus:border-0 placeholder:text-[#C4C4C4] placeholder:dark:text-white"
      />
      <AiOutlineSearch className="absolute top-4 left-12" />
    </div>
  );
};

export default Search;
