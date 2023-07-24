import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ input, handleChange }) => {
  return (
    <div className="relative  h-[56px] ">
      <input
        type="search"
        name="search"
        id="search"
        value={input}
        onChange={handleChange}
        placeholder="Search for a country…"
        className="rounded-md h-full pl-11 w-full md:max-w-sm dark:bg-[var(--container-dark-color)] dark:text-white focus:outline-none focus:border-0 placeholder:text-[#C4C4C4] placeholder:dark:text-white"
      />
      <AiOutlineSearch className="absolute left-2 top-[50%] -translate-y-[50%] " />
    </div>
  );
};

export default Search;
