import { ChevronDown } from "lucide-react";
import "../styles/sort.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function Sort({
  placeHolder = "Sort",
  sort,
  setSort,
  options = ["Ascending", "Descending"],
  open,
  setOpen,
}) {
  const dropdownRef = useRef(null);
  const [otherDropDown, setOtherDropDown] = useState("");

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
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className={
          "sort_button " + (otherDropDown === "normal" ? "active" : "")
        }
        onClick={() => setOtherDropDown("normal")}
        clas
      >
        Normal
      </button>
      <button
        className={
          "sort_button " + (otherDropDown === "fastTrack" ? "active" : "")
        }
        onClick={() => setOtherDropDown("fastTrack")}
      >
        Fast Track
      </button>
      <button
        className={
          "sort_button " + (otherDropDown === "urgency" ? "active" : "")
        }
        onClick={() => setOtherDropDown("urgency")}
      >
        Urgency
      </button>
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
