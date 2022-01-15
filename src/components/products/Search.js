import React, { useRef } from "react";

function Search({ term, searchKeyword }) {
  const inputEl = useRef("")

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value)
  }

  return (
    <form className="d-flex w-50">
      <input
        className="form-control me-2"
        aria-label="Search"
        type="search"
        ref={inputEl}
        value={term}
        placeholder="Search a product"
        onChange={getSearchTerm}
      />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
}

export default Search;