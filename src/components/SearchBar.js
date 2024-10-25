import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResetButton from "./ResetButton";

const SearchBar = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");
  const { mealName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (mealName) {
      setSearch(mealName);
      setSearchQuery(mealName);
    }
  }, [mealName, setSearchQuery]);

  const handleInputChange = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(search);
    navigate(`/?search=${search}`);
  };

  const onResetCategory = () => {
    setSearch("");
    setSearchQuery("");
    navigate("/");
  };

  return (
    <div className="container" style={{ marginBlockStart: "20px" }}>
      <input type="text" value={search} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <ResetButton onResetCategory={onResetCategory} />
    </div>
  );
};

export default SearchBar;
