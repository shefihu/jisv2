import { ChevronDown } from "lucide-react";
import "../styles/sort.css";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function Sort({
  placeHolder = "Sort",
  sort,
  setSort,
  options = ["Ascending", "Descending"],
  open,
  setOpen,
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const handleSelect = (option) => {
    setSort(option);
    setOpen(false);
  };

  const getDisplayText = () => {
    return sort || placeHolder;
  };

  return (
    <div className="sort_container">
      <div className="sort_dropdown_wrapper" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="sort_button"
        >
          <span>{getDisplayText()}</span>

          <ChevronDown
            className={`sort_icon ${open ? "active" : ""}`}
            size={16}
          />
        </button>
        {open && (
          <ul className="sort_dropdown">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`sort_option ${
                  sort === option ? " sort_option_selected" : ""
                }`}
              >
                <input
                  type="radio"
                  checked={sort === option}
                  readOnly
                  className="sort_checkbox"
                  name="sort_option"
                />
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Sort.propTypes = {
  placeHolder: PropTypes.string,
  sort: PropTypes.string,
  setSort: PropTypes.func.isRequired,
  options: PropTypes.array,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sort;
