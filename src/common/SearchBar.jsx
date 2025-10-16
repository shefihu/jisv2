import { SearchIcon } from "../assets/Svg";
import "../styles/searchBar.css";
import PropTypes from "prop-types";

function SearchBar({ searchValue, setSearchValue, placeholder }) {
  return (
    <div className="search_wrapper">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
      />
      <div className="search_icon">
        <SearchIcon />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
