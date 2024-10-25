import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const resetCategory = () => {
    setSelectedCategory("");
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [location.search]);

  return (
    <div className="meals-container">
      <h1>React Cooking App</h1>
      <Categories
        onSelectCategory={setSelectedCategory}
        onResetCategory={resetCategory}
        setSearchQuery={setSearchQuery}
      />
      <SearchBar setSearchQuery={setSearchQuery} />
      <Cards fCategory={selectedCategory} searchQuery={searchQuery} />
    </div>
  );
};

export default Home;