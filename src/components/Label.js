// Label.js
import React, { useState } from 'react';
import './Label.css';

const Label = () => {
  const [rows, setRows] = useState([{ column1: '', column2: [] }]);
  const [column1Options, setColumn1Options] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [column2Options, setColumn2Options] = useState(['Option A', 'Option B', 'Option C']);

  const handleColumn1Change = (value, index) => {
    const updatedRows = [...rows];
    updatedRows[index].column1 = value;
    setRows(updatedRows);
    setColumn1Options(column1Options.filter((option) => option !== value));
  };

  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3", "Option 4"]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newOption, setNewOption] = useState("");

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleAddOption = () => {
    if (newOption && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  const handleAddRow = () => {
    setRows([...rows, { column1: '', column2: [] }]);
  };

  return (
    <div className="label-container">
      <table className="label-table">
        <thead>
          <tr>
            <th>Column 1 (Label 1)</th>
            <th>Column 2 (Label 2)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <select
                  value={row.column1}
                  onChange={(e) => handleColumn1Change(e.target.value, index)}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {column1Options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td>
              <div className="label-container">
      <div className="multi-select-container">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}

        <div className="add-new-option">
          <input
            type="text"
            placeholder="Add new item"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
          />
          <button onClick={handleAddOption}>+ Add</button>
        </div>
      </div>

      <div className="selected-context">
        <h3>Selected Options:</h3>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-row-button" onClick={handleAddRow}>
        Add New Row
      </button>
    </div>
  );
};

export default Label;
