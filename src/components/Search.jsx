import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({input,handleChange}) => {
  return (
    <div className="relative px-4 pt-4 ">
      {/* <div className="relative px-4 shadow max-w-md w-full rounded-md"> */}
        <input
          type="search"
          name="search"
          id="search"
          value={input}
          onChange={handleChange}
          placeholder="Search for a country…"
          className="rounded-md p-3 pl-7 w-full dark:bg-[var(--container-dark-color)] dark:text-white placeholder:dark:text-white"
        />
        <AiOutlineSearch className="absolute top-8 left-6" />
      {/* </div> */}
    </div>
  );
}

export default Search