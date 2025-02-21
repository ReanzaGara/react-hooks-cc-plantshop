import React, { useState } from "react";

function Search({ setSubmittedSearch }) {
  const [giveTerm, setSearchTerm] = useState("");

  
  function takeChange(e) {
    const value = e.target.value;
    setSearchTerm(value);          
    setSubmittedSearch(value);     
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={giveTerm}  
        onChange={takeChange}  
      />
    </div>
  );
}

export default Search;