import React from "react";
import { SearchBar } from "./styles";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const SearchInput: React.FC<Props> = ({ handleChange, value }) => {
  return (
    <>
      <SearchBar>
        <input value={value} onChange={handleChange} placeholder="Search..." />
        <button type="submit">Search</button>\
      </SearchBar>
    </>
  );
};

export default SearchInput;
