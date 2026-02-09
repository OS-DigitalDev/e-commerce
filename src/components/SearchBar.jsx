import { useState } from "react";
import { Link } from "react-router-dom";
import useProductSearch from "../hooks/getSearchData";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { results } = useProductSearch(query);

  // KEY: Function to reset search after a selection is made
  const handleSelection = () => {
    setQuery(""); 
  };

  return (
    <div className="search-container">
      <input
        className={`search-input ${query.trim() && results.length > 0 ? "active-search" : ""}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search products..."
      />

      {query.trim() && results.length > 0 && (
  <div className="search-suggestions" tabIndex="0"> 
          {results.map((item) => (
            <Link 
              to={`/product/${item.id}`} 
              key={item.id} 
              className="suggestion-link"
              onClick={handleSelection} // Reset the search bar on click
            >
              <div className="suggestion-item">
                <span className="suggestion-title">{item.title}</span>
                <span className="suggestion-view">View —</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
