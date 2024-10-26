import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResetButton from "./ResetButton";
import { SearchContext } from "../contexts/SearchContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { mealName } = useParams();
  const navigate = useNavigate();
  const { setSearchQuery } = useContext(SearchContext);
  const handleInputChange = useRef();

  useEffect(() => {
    if (mealName) {
      setSearch(mealName);
      setSearchQuery(mealName);
    }
  }, [mealName, setSearchQuery]);



  const handleSearch = () => {
    setSearchQuery(search);
    navigate(`/?search=${search}`);
    setSearch("");
  };

  return (
    <div className="container" style={{ marginBlockStart: "20px" }}>
      <input type="text" value={search} ref={handleInputChange} onChange={() => setSearch(handleInputChange.current.value)} />
      <button onClick={handleSearch}>Search</button>
      <ResetButton setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default SearchBar;
