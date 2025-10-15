import { ChevronDown } from "lucide-react";
import "../styles/multiSelect.css";
import { useEffect, useRef, useState } from "react";

function MultiSelect({ options, selected, setSelected, placeholder, label }) {
  const wrapperRef = useRef(null);
  const iconRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelected((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      iconRef.current.classList.add("rotate-icon");
      inputRef.current.classList.add("active");
    } else {
      iconRef.current.classList.remove("rotate-icon");
      inputRef.current.classList.remove("active");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if the click happens completely outside the wrapper
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    // 👇 move ref here to include input + dropdown
    <div className="multi_select_wrapper" ref={wrapperRef}>
      <label>{label}</label>

      <div
        ref={inputRef}
        aria-label="multi select input"
        className="multi_select_input"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected.length > 0 ? (
          selected.map((option) => (
            <span
              key={option}
              aria-label={`option ${option}`}
              className="select_option"
            >
              {option}
            </span>
          ))
        ) : (
          <span className="multi_select_placeholder">
            {placeholder ? placeholder : " Select one or more cause of action"}
          </span>
        )}

        <ChevronDown ref={iconRef} size={24} className="multi_select_icon" />
      </div>

      {isOpen && (
        <ul className="multi_select_dropdown">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                readOnly
              />
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MultiSelect;
