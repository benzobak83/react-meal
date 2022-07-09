import { useState } from "react";

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const validationSearch = (e) => {
    setValue(e.target.value.replace(/[\W\d]/gi, ""));
  };
  const handleSearch = () => {
    cb(value);
  };

  return (
    <div className="row row-search">
      <div className="input-field col s12">
        <input
          id="search"
          type="search"
          className="validate"
          placeholder="search"
          onChange={(e) => {
            validationSearch(e);
          }}
          value={value}
          onKeyDown={(e) => handleKey(e)}
        />
        <button className="btn search-btn" onClick={handleSearch}>
          search
        </button>
      </div>
    </div>
  );
};

export { Search };
