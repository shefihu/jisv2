import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/dashboard/selectField.css";
import { ChevronDown } from "lucide-react";

const SelectDropdown = ({ label, options, value, onChange, placeholder }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleOptionSelect = (option) => {
    onChange(option.value);
    setIsDropdownOpen(false);
  };

  const getDisplayValue = () => {
    if (!value) return placeholder;
    const selectedOption = options.find((option) => option.value === value);
    return selectedOption ? selectedOption.label : value;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <p className="select_label">{label}</p>
      <div className="select_container">
        <button className="select_btn" type="button" onClick={toggleDropdown}>
          <p className={value !== "" ? "select_value" : "select_placeholder"}>
            {getDisplayValue()}
          </p>
          <ChevronDown size={24} color="#292D32" />
        </button>
        {isDropdownOpen && (
          <div className="select_dropdown">
            {options.map((option) => (
              <p
                key={option.value}
                className="select_option"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

SelectDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SelectDropdown;
