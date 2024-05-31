import React, { useState } from "react";
import SearchIcon from "../assets/search.png";

type Props = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<Props> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
      <form className="d-flex searchbar w-75 mx-auto" onSubmit={handleSubmit}>
        <input
          className="form-control border-0"
          type="search"
          placeholder={placeholder}
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          <img src={SearchIcon} width={27} height={27} alt="" />
        </button>
      </form>
  );
};

export default SearchBar;
