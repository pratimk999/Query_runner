import React from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import data from "../../src/Data";

function CustomSelect({
  selectName,
  setTable,
  table,
  setQuery,
  query,
  setData,
  isCustom,
  setCustomQuery,
}) {
  const handleChange = (event) => {
    setData([]);
    setCustomQuery("");
    const inputValue = event.target.value;
    if (selectName === "Schemas") {
      setTable(inputValue);
      setQuery("None");
    } else {
      setQuery(inputValue);
    }
  };

  //   console.log("Action is :: ", selectName, " Data is :: ", data);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id={selectName}>{selectName}</InputLabel>
        <Select
          labelId={selectName}
          id={selectName}
          value={selectName === "Schemas" ? table : query}
          label={selectName}
          disabled={selectName !== "Schemas" && isCustom ? true : false}
          onChange={handleChange}>
          {selectName !== "Schemas" && (
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
          )}

          {selectName !== "Schemas"
            ? data.queries[data.tables[table]].map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              })
            : data.tables.map((item, index) => {
                return (
                  <MenuItem key={index} value={index}>
                    {item}
                  </MenuItem>
                );
              })}
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomSelect;
