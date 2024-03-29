import React from "react";

const Select = ({ handleContienentChange, value }) => {
  const CONTIENENTS = ["All", "Africa", "Americas", "Asia", "Oceania"];
  return (
    <div className="p-1 shadow rounded-md w-full md:max-w-[200px]">
      <select
        id="continents"
        className="outline-0 text-gray-900 text-sm rounded-lg  dark:bg-[var(--container-dark-color)] p-3 w-full dark:text-white"
        onChange={handleContienentChange}
      >
        {CONTIENENTS.map((contienent, index) => {
          if (index === 0) {
            if (value === contienent) {
              return (
                <option selected className="p-2" value={contienent}>
                  Filter by Region
                </option>
              );
            } else
              return (
                <option className="p-2" value={contienent}>
                  Filter by Region
                </option>
              );
          } else if (value === contienent)
            return (
              <option selected value={contienent} className="p-2 inline-block">
                {contienent}
              </option>
            );
          else
            return (
              <option value={contienent} className="p-2 inline-block">
                {contienent}
              </option>
            );
        })}
      </select>
    </div>
  );
};

export default Select;
