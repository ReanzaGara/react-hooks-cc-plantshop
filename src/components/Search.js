import React from "react";

function Search( {onSearch} ) {

  function findPlant(e) {
    onSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={findPlant}
        type="text"
        id="search"
        placeholder="Type a name to search..."
       
      />
    </div>
  );
}

export default Search;
