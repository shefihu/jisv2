import { ChevronDown, X, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "../styles/multiSelect.css";

function MultiSelect({
  options,
  selected,
  setSelected,
  placeholder,
  label,
  loading,
  error,
}) {
  const wrapperRef = useRef(null);
  const iconRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Filter out already selected options
  const availableOptions = options.filter(
    (option) => !selected.includes(option)
  );

  const handleOptionClick = (option) => {
    setSelected((prev) => [...prev, option]);
  };

  const handleRemoveOption = (e, optionToRemove) => {
    e.stopPropagation(); // Prevent opening dropdown when clicking X
    setSelected((prev) => prev.filter((item) => item !== optionToRemove));
  };

  useEffect(() => {
    if (!iconRef.current || !inputRef.current) return;

    if (isOpen && !loading) {
      iconRef.current.classList.add("rotate-icon");
      inputRef.current.classList.add("active");
    } else {
      iconRef.current.classList.remove("rotate-icon");
      inputRef.current.classList.remove("active");
    }
  }, [isOpen, loading]);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <div className="multi_select_wrapper" ref={wrapperRef}>
      <label>{label}</label>

      <div
        ref={inputRef}
        aria-label="multi select input"
        className="multi_select_input"
        onClick={() => !loading && setIsOpen((prev) => !prev)}
        style={{
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? (
          <span
            className="multi_select_placeholder"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Loader2 size={16} className="animate-spin" />
            Loading options...
          </span>
        ) : selected.length > 0 ? (
          selected.map((option) => (
            <span
              key={option}
              aria-label={`option ${option}`}
              className="select_option"
            >
              {option}
              <X
                size={16}
                className="remove_icon"
                onClick={(e) => handleRemoveOption(e, option)}
              />
            </span>
          ))
        ) : (
          <span className="multi_select_placeholder">
            {placeholder ? placeholder : "Select one or more cause of action"}
          </span>
        )}

        {loading ? (
          <Loader2 size={24} className="multi_select_icon animate-spin" />
        ) : (
          <ChevronDown ref={iconRef} size={24} className="multi_select_icon" />
        )}
      </div>

      {isOpen && !loading && (
        <ul className="multi_select_dropdown">
          {availableOptions.length > 0 ? (
            availableOptions.map((option) => (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))
          ) : (
            <li className="no_options">All options selected</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default MultiSelect;
