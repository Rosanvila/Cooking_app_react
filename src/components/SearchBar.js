import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { mealName } = useParams();

  useEffect(() => {
    const fetchMealName = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        console.log(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    if (mealName) {
      setSearch(mealName);
      fetchMealName();
    }
  }, [mealName, search]);

  const handleInputChange = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSearch = () => {
    const fetchMealName = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        console.log(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMealName();
  };

  return (
    <div className="container" style={{ marginBlockStart: "20px" }}>
      <input type="text" value={search} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;