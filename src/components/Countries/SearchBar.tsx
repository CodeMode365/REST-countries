import React, { FormEvent } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-lightText sr-only dark:bg-darkEle dark:text-darkText"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none dark:text-darkEle">
          <BsSearch />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-lightText border  rounded-lg  "
          placeholder="Search"
          required
        />
        <button
          className=" absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-lightBg dark:text-darkEle"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
