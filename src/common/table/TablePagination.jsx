import { useState, useRef, useEffect } from "react";
import "../../styles/tablePagination.css";
import { DownArrow, LeftArrow, RightArrow } from "../../assets/Svg";

export default function TablePagination({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPageChange,
  onEntriesChange,
}) {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const start = (currentPage - 1) * entriesPerPage + 1;
  const end = Math.min(currentPage * entriesPerPage, totalEntries);
  const [inputValue, setInputValue] = useState(entriesPerPage.toString());
  const [lastValidValue, setLastValidValue] = useState(entriesPerPage);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const generateEntryOptions = (total, currentEntries) => {
    if (total <= 5) return [total];

    const options = [];

    // Always include small, medium, large, and all
    const tenPercent = Math.max(1, Math.floor(total * 0.1));
    const twentyFivePercent = Math.max(1, Math.floor(total * 0.25));
    const fiftyPercent = Math.max(1, Math.floor(total * 0.5));

    options.push(tenPercent);
    options.push(twentyFivePercent);
    options.push(fiftyPercent);
    options.push(total);

    // Add some common small numbers if they fit
    [5, 10, 20, 50].forEach((num) => {
      if (num < total && !options.includes(num)) {
        options.push(num);
      }
    });

    // Remove duplicates manually and sort
    const uniqueOptions = [];
    options.forEach((option) => {
      if (!uniqueOptions.includes(option)) {
        uniqueOptions.push(option);
      }
    });

    // Filter out options smaller than current selection
    return uniqueOptions
      .filter((option) => option >= currentEntries)
      .sort((a, b) => a - b);
  };

  let entryOptions = generateEntryOptions(totalEntries, entriesPerPage);

  const handleInputChange = (value) => {
    setInputValue(value);

    if (value === "") {
      return;
    }

    const num = Number(value);
    if (!isNaN(num) && num > 0 && num <= totalEntries) {
      setLastValidValue(num);
      onEntriesChange(num);
    }
  };

  const handleInputBlur = () => {
    // If input is empty on blur, restore last valid value
    if (inputValue === "" || inputValue === "0") {
      setInputValue(lastValidValue.toString());
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleOptionClick = (value) => {
    setInputValue(value.toString());
    setLastValidValue(value);
    onEntriesChange(value);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="pagination_container">
      <div className="pagination_info_container">
        <div className="entries_control">
          <p className="entries_label">Show</p>
          <div className="custom_dropdown" ref={dropdownRef}>
            <div className="entries_input_container">
              <input
                type="number"
                className="entries_input"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onWheel={(e) => e.target.blur()}
                min="1"
                max={totalEntries}
                placeholder={lastValidValue.toString()}
              />
              <span className="entries_input_icon">
                <DownArrow />
              </span>
            </div>
            {isOpen && (
              <div className="dropdown_options">
                {entryOptions.map((num) => (
                  <div
                    key={num}
                    className="dropdown_option"
                    onClick={() => handleOptionClick(num)}
                  >
                    {num}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span>Entries</span>
        </div>

        <div>
          Showing {start} - {end} of {totalEntries} entries
        </div>
      </div>

      <div className="pagination_buttons">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="page_btn"
        >
          <LeftArrow />
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page_btn"
        >
          Next
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
