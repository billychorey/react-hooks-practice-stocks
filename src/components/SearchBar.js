import React from "react";

function SearchBar({handleOptionChange, handleSelectChange}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label >
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleOptionChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleOptionChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelectChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
