import React, { FormEvent } from "react";
import "./Search.css";

const Search = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search by name, profession,..."
          name="s"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
